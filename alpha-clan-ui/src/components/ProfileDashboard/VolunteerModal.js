import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import InputTags from "../TagInput/InputTags";

const VolunteerModal = ({ isEdit, onHideSetIsEdit, rowData }) => {
  const [show, setShow] = useState(false);
  const [volunteer, setVolunteer] = useState();
  
  const handleClose = () => {
    setShow(false);
    onHideSetIsEdit(false);
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isEdit) {
      setShow(true);
      setVolunteer(rowData?.volunteer_at);
  // console.log(volunteer);
      
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
              <InputTags
                defaultValue={volunteer}
                onChange={setVolunteer}
                data={[
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
            variant="success"
            className="button submit-button"
            onClick={handleClose}
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
