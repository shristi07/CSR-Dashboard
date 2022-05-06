import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import InputTags from "../TagInput/InputTags";



const DonateModal = () => {
    const [show, setShow] = useState(false);

    const [category, setCategory] = useState("amount");
    const [frequency, setFrequency] = useState();
    const [amount, setAmount] = useState(false);
    const [donateItem, setDonateItem] = useState();
    const [comment, setComment] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  console.log("cate",category);
    return (
      <>
        <Button className="button submit-button" variant="success" onClick={handleShow}>
          Donate
        </Button>
  
        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Create Donation Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="form-group" as={Row}>
          <Form.Label column sm="4">Donation Category <span className="required">*</span></Form.Label>
          <Col sm="8">
          <Form.Control
                as={"select"}
                name={"category"}
                id={"category"}
                value={category}
                onChange={({ target: { value } }) => {
                  setCategory(value);
                }}
              >
                <option selected  value="amount"> Monetory Donation </option>
                <option value="item"> Charity Donation </option>
              </Form.Control></Col>
          
          <Form.Control.Feedback type={"invalid"}>This field is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group"as={Row}>
            <Form.Label column sm="4">
              Donate<span className="required">*</span>
            </Form.Label>
            <Col sm="8">
                {category === "amount"?<>
                <Form.Check
                inline
                label="Once"
                name="group2"
                type={"radio"}
                id={"inline-radio-1"}
                checked={frequency === "Once"}
                onChange={() => setFrequency("Once")}
              />
              <Form.Check
                inline
                label="Monthly"
                type={"radio"}
                name="group2"
                id={"inline-radio-4"}
                checked={frequency === "Monthly"}
                onChange={() => setFrequency("Monthly")}
              />
                </>:

                    <InputTags
                    defaultValue={donateItem}
        onChange={setDonateItem}
        styles={{
          control: (styles) => ({ ...styles, backgroundColor: '#23c6c8' })}}
                      data={[
                        { value: 'books', label: 'books'},
                        { value: 'clothes', label: 'Clothing'},
                        { value: 'toys', label: 'Toys'},
                        { value: 'electronics', label: 'Electronic Item'},
                        { value: 'blankets', label: 'Linen/Blankets'},
                        { value: 'furniture', label: 'Furniture'},
                        { value: 'other', label: 'Other'},
                      ]}
                    
                    /> }
                </Col>
          <Form.Control.Feedback type={"invalid"}>This field is required!</Form.Control.Feedback>
                </Form.Group>
           
        {category === "item"?<Form.Group className="form-group"as={Row}>
            <Form.Label column sm="4">
              Comments
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Give in your Comments"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Col>
          </Form.Group>:
          <Form.Group className="form-group" as={Row}>
          <Form.Label column sm="4">Amount <span className="required">*</span></Form.Label>
          <Col sm="8">
          <InputGroup>
          <Form.Control
            id={"amount"}
            name={"amount"}
            type={"number"}
            value={amount}
            placeholder={""}
            onChange={({target: {value}}) => {
              setAmount(value);
            }}
          />
    <InputGroup.Text style={{marginLeft:"-1px",padding:"2px 5px"}}>INR</InputGroup.Text>
  </InputGroup></Col>
          
          <Form.Control.Feedback type={"invalid"}>This field is required!</Form.Control.Feedback>
          <span className="info">*Your contribution will be deducted from your salary for the current month</span>
        </Form.Group>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary"className="button cancel-button" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" className="button submit-button" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

DonateModal.propTypes = {
  editReport: PropTypes.bool,
  onHideSetEditFormRow: PropTypes.func,
  reportData: PropTypes.object.isRequired,
  editCreateReportData: PropTypes.func,
};
DonateModal.defaultProps = {
  editReport: false,
};

export default DonateModal;
