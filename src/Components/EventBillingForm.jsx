import { Form, Formik } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import FormikInput from "./FormikInput";
import { Row, Col, Divider, Space, Breadcrumb } from "antd";
import FormikSelect from "./FormikSelect";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import Ticket from "./Ticket";

const EventBillingForm = () => {
  const { id, quantity } = useParams();
  const [eventData, setEventData] = useState(null);
  const [pdfVisible, setPdfVisible] = useState(false);
  const TICKETMASTER_API_KEY = "tHiymJK0YKLPZlTXnaAKiZ8QW5v4CSe4";

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${TICKETMASTER_API_KEY}`
        );

        setEventData(response.data);
        console.log(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, [id]);

  const initialValues = {
    fullName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
  };

  const validationSchema = yup.object({
    fullName: yup.string().required("Full Name is required."),
    email: yup.string().email("Invalid email address"),
    address: yup.string().required("Address is required."),
    country: yup.string().required("Country is required."),
    state: yup.string().required("State is required."),
    city: yup.string().required("City is required."),
    zip: yup.string().required("Zip/Postal Code is required."),
  });
  const countryOptions = [
    { value: "nep", label: "Nepal" },
    { value: "in", label: "India" },
  ];

  const handleSubmit = async (values) => {
    setPdfVisible(true);
  };
  const handleClosePdf = () => {
    // Close the PDF viewer
    setPdfVisible(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <div style={{ padding: "2rem" }}>
          <div>
            <Breadcrumb
              separator={<span style={{ color: "#97ABC0" }}>/</span>}
              style={{ color: "#97ABC0", background: "black", padding: "10px" }}
            >
              <Breadcrumb.Item>
                <span style={{ color: "#97ABC0" }}>Home</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="" style={{ color: "#97ABC0" }}>
                  Explore Events
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="" style={{ color: "#97ABC0" }}>
                  Oppenhiemer
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span style={{ color: "red" }}>Checkout</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h2>Order Information</h2>
          <Divider style={{ background: "#97ABC0" }} />
          <Form style={{ display: "flex", flexDirection: "column" }}>
            <Row gutter={[16, 16]} justify="space-between">
              <Col xs={24} md={14}>
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid var(--dark-mode-border-color, #252D3C)",
                    background:
                      "var(--dark-mode-background-secondary, #1C1C24)",
                  }}
                >
                  {/* FormikInputs and other form elements */}
                  <FormikInput
                    name="fullName"
                    label="Full Name"
                    type="text"
                    required={true}
                    style={{ marginBottom: "10px", width: "100%" }}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      maxWidth: "100%",
                    }}
                  >
                    <div style={{ flex: 1, marginRight: "10px" }}>
                      <FormikInput
                        name="email"
                        label="Email"
                        type="text"
                        required={true}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <FormikInput
                        name="address"
                        label="Address"
                        type="text"
                        required={true}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      maxWidth: "100%",
                    }}
                  >
                    <div style={{ flex: 1, marginRight: "10px" }}>
                      <FormikSelect
                        name="country"
                        label="Country"
                        options={countryOptions}
                        required={true}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <FormikInput
                        name="state"
                        label="State"
                        type="text"
                        required={true}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      maxWidth: "100%",
                    }}
                  >
                    <div style={{ flex: 1, marginRight: "10px" }}>
                      <FormikInput
                        name="city"
                        label="City"
                        type="text"
                        required={true}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <FormikInput
                        name="zip"
                        label="Zip/Postal Code"
                        type="text"
                        required={true}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  {/* </Form> */}
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div
                  style={{
                    padding: "30px",
                    borderRadius: "8px",
                    border: "1px solid var(--dark-mode-border-color, #252D3C)",
                    background:
                      "var(--dark-mode-background-secondary, #1C1C24)",
                  }}
                >
                  {/* Include your checkout summary components here */}
                  <div>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Checkout Summary
                    </p>
                    <Divider style={{ background: "#97ABC0" }} />

                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {eventData?.name}
                    </p>
                    <Space size={30}>
                      <p style={{ color: "#97ABC0" }}>movie</p>
                      <p style={{ color: "#97ABC0" }}>Kathmandu, Nepal</p>
                    </Space>

                    <Divider style={{ background: "#97ABC0" }} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Subtotal:</p>
                      <p>x{quantity}</p>
                      <p>
                        <strong>Rs. {1000 * quantity}</strong>
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>VAT (13%):</p>
                      <p>
                        <strong>Rs.130</strong>
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Discount:</p>
                      <p>
                        <strong>Rs. 0</strong>
                      </p>
                    </div>
                    <Divider style={{ background: "#97ABC0" }} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Total:</p>
                      <p>
                        {" "}
                        Rs.{" "}
                        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                        {1000 * quantity * 1.13}
                        </span>
                      </p>
                    </div>
                    <Divider style={{ background: "#97ABC0" }} />
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                      <button
                        style={{
                          background: "#E14658",
                          color: "white",
                          padding: "10px 20px",
                          border: "none",
                          cursor: "pointer",
                          width: "100%",
                        }}
                        type="submit"
                      >
                        Confirm & Pay
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
          {pdfVisible && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1000,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "8px",
                  width: "80%",
                  height: "80%",
                  overflow: "auto",
                }}
              >
                <PDFViewer width="100%" height="100%">
                  <Ticket
                    fullName={formik.values.fullName}
                    address={formik.values.address}
                    city={formik.values.city}
                    country={formik.values.country}
                    movieTitle={eventData?.name}
                    quantity={quantity}
                    subtotal={1000 * quantity}
                    vat={(1000 * quantity * 0.13).toFixed(2)}
                    discount={0}
                    total={(1000 * quantity * 1.13).toFixed(2)}
                    poster={eventData.images[0].url}
                    unitPrice='1000'
                  />
                </PDFViewer>
                <button onClick={handleClosePdf}>Close PDF</button>
              </div>
            </div>
          )}
        </div>
      )}
    </Formik>
  );
};

export default EventBillingForm;
