import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import InputTags from "../TagInput/InputTags";

const FundRaiserModal = () => {
  const [show, setShow] = useState(false);
  const [cause, setCause] = useState();//medical emergency/demise/other
  const [fundsFor, setFundsFor] = useState("");//name
  const [relation, setRelation] = useState(""); //medical(Co-worker/Family/Friend/Other)
  const [upperLimit, setUpperLimit] = useState();
  const [summary, setSummary] = useState("");
  const [dueDate, setDueDate] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="button submit-button"
        variant="success"
        onClick={handleShow}
      >
        Raise Funds
      </Button>

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Start A Fundraiser</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="form-group" as={Row}>
          <Form.Label column sm="4">Cause <span className="required">*</span></Form.Label>
          <Col sm="8">
          <Form.Control
                as={"select"}
                name={"cause"}
                id={"cause"}
                value={cause}
                onChange={({ target: { value } }) => {
                  setCause(value);
                }}
              >
                <option selected  value="medical">Medical Emergency</option>
                <option value="demise">Demise </option>
                <option value="other">Other </option>
              </Form.Control></Col>
          
          <Form.Control.Feedback type={"invalid"}>This field is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group"as={Row}>
            <Form.Label column sm="4">
              Funds For<span className="required">*</span>
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Collect funds for"
                value={fundsFor}
                onChange={(e) => setFundsFor(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="form-group" as={Row}>
          <Form.Label column sm="4">Relation <span className="required">*</span></Form.Label>
          <Col sm="8">
          <Form.Control
                as={"select"}
                name={"relation"}
                id={"relation"}
                value={relation}
                onChange={({ target: { value } }) => {
                  setRelation(value);
                }}
              >
                <option selected  value="family">Family</option>
                <option value="co-worker">Co-Worker </option>
                <option value="friend">Friend </option>
                <option value="other">Other </option>
              </Form.Control></Col>
          
          <Form.Control.Feedback type={"invalid"}>This field is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" as={Row}>
          <Form.Label column sm="4">Funds <span className="required">*</span></Form.Label>
          <Col sm="8">
          <InputGroup>
          <Form.Control
            id={"upperLimit"}
            name={"upperLimit"}
            type={"number"}
            value={upperLimit}
            placeholder={""}
            onChange={({target: {value}}) => {
              setUpperLimit(value);
            }}
          />
    <InputGroup.Text style={{marginLeft:"-1px",padding:"2px 5px"}}>INR</InputGroup.Text>
  </InputGroup></Col>
          
          <Form.Control.Feedback type={"invalid"}>This field is required!</Form.Control.Feedback>
        </Form.Group>
<Form.Group className="form-group"as={Row}>
            <Form.Label column sm="4">
              Summary
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Describe your cause"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
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

FundRaiserModal.propTypes = {
  editReport: PropTypes.bool,
  onHideSetEditFormRow: PropTypes.func,
  reportData: PropTypes.object.isRequired,
  editCreateReportData: PropTypes.func,
};
FundRaiserModal.defaultProps = {
  editReport: false,
};

export default FundRaiserModal;
