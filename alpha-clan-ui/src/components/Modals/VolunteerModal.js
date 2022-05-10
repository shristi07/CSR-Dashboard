import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { useDispatch } from "react-redux";
import { submitContributionRequest } from "../../Actions/ProfileActions";

const animatedComponents = makeAnimated();

const VolunteerModal = ({ isEdit, onHideSetIsEdit,onSumitSetActiveCard, rowData }) => {
  const [show, setShow] = useState(false);
  const [volunteer, setVolunteer] = useState([]);
  const dispatch = useDispatch();
  const handleClose = () => {
    setVolunteer([]);
    setShow(false);
    onHideSetIsEdit(false);
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isEdit) {
      setShow(true);
      setVolunteer(rowData?.volunteer_at);
      
    }
  }, [isEdit,rowData]);

  return (
    <>
      <Button
        className="button submit-button"
        variant="success"
        onClick={handleShow}
      >
        Volunteer
      </Button>

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{isEdit ? "Edit Volunteer Request" : "Create Volunteer Request"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="form-group" as={Row}>
            <Form.Label column sm="3">
              Volunteer<span className="required">*</span>
            </Form.Label>
            <Col sm="9">
              <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      value={volunteer}
      onChange={(selectedOption) => {
        setVolunteer([...selectedOption])
      }}
      options={[
        { value: "Tree Plantation Drive", label: "Tree Plantation Drive" },
        { value: "Support Families(Pulwama Attack Martyrs)", label: "Support Families(Pulwama Attack Martyrs)" },
        { value: "Blanket Distribution", label: "Blanket Distribution" },
        { value: "Pyayas Vidyalaya", label: "Pyayas Vidyalaya" },
      ]}
    />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            className="button cancel-button"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            disabled={volunteer.length==0||isEdit}
            variant="success"
            className="button submit-button"
            onClick={() => {
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, "0");
              var mm = String(today.getMonth() + 1).padStart(2, "0");
              var yyyy = today.getFullYear();

              today = `${mm}-${dd}-${yyyy}`;
              let data = {
                volunteer_at:volunteer,
                requested_on: today,
                status: "Pending",
                social_score: 5,
                contribution_id:Math.floor((Math.random() * 10) + 1),
                contribution_type_id: 1,
                actions: "",
                date:"07-05-2022"
              };
              if (isEdit) {
                // dispatch(
                //   updateContributionRequest(data, contribution?.id, () => {
                //     handleClose();
                //   })
              } else {
                dispatch(
                  submitContributionRequest(data, () => {
                    handleClose();
                  })
                );
                onSumitSetActiveCard();
              }
            }}
          >
             {isEdit?"Save":"Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

VolunteerModal.propTypes = {
  isEdit: PropTypes.bool,
  onHideSetEdit: PropTypes.func,
  rowData: PropTypes.object.isRequired,
};
VolunteerModal.defaultProps = {
  isEdit: false,
};

export default VolunteerModal;
