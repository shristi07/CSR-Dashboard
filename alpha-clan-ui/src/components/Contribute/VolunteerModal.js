import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import InputTags from "../TagInput/InputTags";

const VolunteerModal = () => {
  const [show, setShow] = useState(false);
  const [volunteer, setVolunteer] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Modal.Title>Create Volunteer Request</Modal.Title>
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
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

VolunteerModal.propTypes = {
  editReport: PropTypes.bool,
  onHideSetEditFormRow: PropTypes.func,
  reportData: PropTypes.object.isRequired,
  editCreateReportData: PropTypes.func,
};
VolunteerModal.defaultProps = {
  editReport: false,
};

export default VolunteerModal;
