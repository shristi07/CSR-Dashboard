import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { submitContributionRequest } from "../../Actions/ProfileActions";
import { useDispatch } from "react-redux";

const FundRaiserModal = ({ isEdit,onSumitSetActiveCard, onHideSetIsEdit, rowData }) => {
  const [show, setShow] = useState(false);
  const [cause, setCause] = useState("medical");//medical emergency/demise/other
  const [fundsFor, setFundsFor] = useState("");//name
  const [relation, setRelation] = useState("Family"); //medical(Co-worker/Family/Friend/Other)
  const [upperLimit, setUpperLimit] = useState();
  const [summary, setSummary] = useState("");
  const [dueDate, setDueDate] = useState();
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    setCause("medical");
    setFundsFor("");
    setRelation("Family");
    setUpperLimit("");
    setSummary("");
    setDueDate();

    onHideSetIsEdit(false);
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isEdit) {
      setShow(true);
      setCause(rowData.donation_category==="Medical Emergency"?"medical":"Demise"?"demise":"other");
      setRelation(rowData.relation);
      setFundsFor(rowData.funds_for);
      setDueDate(rowData.ends)
      setSummary(rowData.comment);
      setUpperLimit(rowData.fund_aim);   
    }
  }, [isEdit,rowData]);
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
          <Modal.Title>{isEdit ? "Edit Fund Raiser Request" : "Start A Fundraiser"}</Modal.Title>
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
                placeholder="Name"
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
                <option selected  value="Family">Family</option>
                <option value="Co-Worker">Co-Worker </option>
                <option value="Friend">Friend </option>
                <option value="Other">Other </option>
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
              Due Date<span className="required">*</span>
            </Form.Label>
        <Col sm="8">
                <Form.Control
                  type="date"
                  placeholder={"Start Date"}
                  value={dueDate}
                  onChange={({ target: { value } }) => {
                    setDueDate(value);
                  }}
                />
              </Col>
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
            disabled={!(fundsFor&&relation&&upperLimit&&dueDate)}
            variant="success"
            className="button submit-button"
            onClick={() => {
              let tempCause = `${
                cause === "medical" ? "Medical Emergency" :cause === "other"?"Other":"Demise" 
              }`;
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, "0");
              var mm = String(today.getMonth() + 1).padStart(2, "0");
              var yyyy = today.getFullYear();

              today = `${mm}-${dd}-${yyyy}`;
              
              let data = {
                cause:tempCause,
                funds_for:fundsFor,
                relation,
                fund_aim:upperLimit,
                requested_on: today,
                comment:summary,
                status: "Pending",
                social_score: 10,
                contribution_type_id: 2,
                actions: "",
                ends:dueDate,
                contribution_id:Math.floor((Math.random() * 10) + 1),
              };
              console.log(data);
              if (isEdit) {
                console.log("");
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
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

FundRaiserModal.propTypes = {
  isEdit: PropTypes.bool,
  onHideSetEdit: PropTypes.func,
  rowData: PropTypes.object.isRequired,
};
FundRaiserModal.defaultProps = {
  isEdit: false,
};


export default FundRaiserModal;
