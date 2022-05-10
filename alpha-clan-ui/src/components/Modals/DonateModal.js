import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PropTypes from "prop-types";
import {
  updateContributionRequest,
  submitContributionRequest,
  test,
  editContributionRequest,
} from "../../Actions/ProfileActions";
import { useDispatch } from "react-redux";
const animatedComponents = makeAnimated();

const DonateModal = ({
  isEdit,
  onHideSetIsEdit,
  rowData,
  fundraiser,
  star,
  onSumitSetActiveCard
}) => {
  const [show, setShow] = useState(false);

  const [category, setCategory] = useState("amount");
  const [frequency, setFrequency] = useState();
  const [amount, setAmount] = useState("");
  const [donateItem, setDonateItem] = useState([]);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    setCategory("amount");
    setFrequency();
    setAmount("");
    setDonateItem([]);
    setComment("");
    onHideSetIsEdit(false);
  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (isEdit) {
      setShow(true);
      setCategory(
        rowData?.donation_category === "Monetory Donation"
          ? "amount"
          : "item"
      );
      setFrequency(rowData?.frequency)
      {
        rowData?.donation_category === "Monetory Donation"
          ? setAmount(rowData?.donation)
          : setDonateItem(rowData?.donation);
      }
      setComment(rowData?.comment);
    } else if (fundraiser) {
      setCategory("amount");
    }
  }, [isEdit, rowData]);

  return (
    <>
      <Button
        className="button submit-button"
        variant="success"
        onClick={handleShow}
      >
        {fundraiser ? "Contribute" : "Donate"}
        {star && <i class="star fa fa-star"></i>}
      </Button>

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {isEdit ? "Edit Donation Request" : "Create Donation Request"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="form-group" as={Row}>
            <Form.Label column sm="4">
              Donation Category <span className="required">*</span>
            </Form.Label>
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
                <option selected value="amount">
                  {" "}
                  Monetory Donation{" "}
                </option>
                <option disabled={fundraiser} value="item"> Charity Donation </option>
              </Form.Control>
            </Col>

            <Form.Control.Feedback type={"invalid"}>
              This field is required!
            </Form.Control.Feedback>
          </Form.Group>
          {!fundraiser && <Form.Group className="form-group" as={Row}>
            <Form.Label column sm="4">
              Donate<span className="required">*</span>
            </Form.Label>
            <Col sm="8">
              {category === "amount" ? (
                <>
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
                </>
              ) : (
                <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                value={donateItem}
                onChange={(selectedOption) =>setDonateItem([...selectedOption])
                }
                options={[
                  { value: "Books", label: "Books" },
                  { value: "Linen/Blankets", label: "Linen/Blankets" },
                  { value: "Clothing", label: "Clothing" },
                  { value: "Toys", label: "Toys" },
                  { value: "Electronic Item", label: "Electronic Item" },
                  { value: "Furniture", label: "Furniture" },
                  { value: "Other", label: "Other" },
                ]}
                />
              )}
            </Col>
            <Form.Control.Feedback type={"invalid"}>
              This field is required!
            </Form.Control.Feedback>
          </Form.Group>}

          {category === "item" ? (
            <Form.Group className="form-group" as={Row}>
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
            </Form.Group>
          ) : (
            <Form.Group className="form-group" as={Row}>
              <Form.Label column sm="4">
                Amount <span className="required">*</span>
              </Form.Label>
              <Col sm="8">
                <InputGroup>
                  <Form.Control
                    id={"amount"}
                    name={"amount"}
                    type={"text"}
                    value={amount}
                    placeholder={""}
                    onChange={({ target: { value } }) => {
                      setAmount(value);
                    }}
                  />
                  <InputGroup.Text
                    style={{ marginLeft: "-1px", padding: "2px 5px" }}
                  >
                    INR
                  </InputGroup.Text>
                
                </InputGroup>
                <span style={{position:"unset"}} className="info">
                *100 INR Donated = +1 Social Score
              </span>
              </Col>

              <Form.Control.Feedback type={"invalid"}>
                This field is required!
              </Form.Control.Feedback>
              <span className="info">
                *Your contribution will be deducted from your salary for the
                current month
              </span>
            </Form.Group>
          )}
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
            disabled={(category==="amount"?!(frequency && (donateItem || amount)):false)||isEdit}
            variant="success"
            className="button submit-button"
            onClick={() => {
              let tempCategory = `${
                category === "amount" ? "Monetory Donation" : "Charity Donation"
              }`;
              let tempDonation = `${
                category === "amount" ? amount : donateItem
              }`;
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, "0");
              var mm = String(today.getMonth() + 1).padStart(2, "0");
              var yyyy = today.getFullYear();

              today = `${mm}-${dd}-${yyyy} ${
                frequency === "Monthly" ? frequency : ""
              }`;
              let data = {
                donation_category:category === "amount" ? "Monetory Donation" : "Charity Donation",
                donation: category === "item"?donateItem:amount,
                requested_on: today,
                status: "Pending",
                frequency,
                social_score: category==="amount"?Math.floor(amount/100):10,
                contribution_type_id: 0,
                contribution_id:Math.floor((Math.random() * 10) + 1),
                actions: "",
              };
              if (isEdit) {
                dispatch(
                  editContributionRequest(data, () => {
                    handleClose();
                  }));
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
            {isEdit ? "Save" : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DonateModal.propTypes = {
  isEdit: PropTypes.bool,
  onHideSetEdit: PropTypes.func,
  rowData: PropTypes.object.isRequired,
};
DonateModal.defaultProps = {
  isEdit: false,
};

export default DonateModal;
