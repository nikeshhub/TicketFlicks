import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, DatePicker, Select, InputNumber } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,

  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useParams } from "react-router-dom";

const { Meta } = Card;
const { Option } = Select;

const EventDetail = () => {
  const { id } = useParams();
  const [concertData, setConcertData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedConcertQuantity, setSelectedConcertQuantity] = useState(1);
  const concertPrice = 1000; // Set the initial price per concert ticket
  console.log(id);

  useEffect(() => {
    const fetchConcertData = async () => {
      try {
        const response = await axios.get(
          `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=tHiymJK0YKLPZlTXnaAKiZ8QW5v4CSe4`
        );

        setConcertData(response.data);
      } catch (error) {
        console.error("Error fetching concert data:", error);
      }
    };

    fetchConcertData();
  }, [id]);

  // Function to handle changes in date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to handle changes in location selection
  const handleLocationChange = (value) => {
    setSelectedLocation(value);
  };

  // Function to handle changes in concert quantity selection
  const handleQuantityChange = (value) => {
    setSelectedConcertQuantity(value);
  };

  // Calculate the total price based on quantity
  const totalPrice = concertPrice * selectedConcertQuantity;

  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={[16, 16]}>
        {/* Left Side: Single Concert Card */}
        <Col xs={24} md={8} lg={6} xl={6}>
          {concertData && (
            <Card
              hoverable
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "20%",
                width: "100%",
              }}
              cover={
                <img
                  alt={concertData.name}
                  src={
                    concertData.images && concertData.images.length > 0
                      ? concertData.images[3].url
                      : "https://placehold.it/500x750" // Placeholder image if no image is available
                  }
                  style={{ objectFit: "contain",  }}
                />
              }
            >
              <Meta
                title={
                  <span style={{ color: "white" }}>{concertData.name}</span>
                }
                description={
                  <span style={{ color: "white" }}>
                    Date:{" "}
                    {new Date(
                      concertData.dates.start.dateTime
                    ).toLocaleDateString()}
                  </span>
                }
              />
            </Card>
          )}
        </Col>

        {/* Middle: Gap */}
        <Col xs={0} md={0} lg={8} xl={8} />

        {/* Right Side: Event Details */}
        <Col xs={24} md={24} lg={10} xl={10}>
          <div style={{ padding: "40px 0" }}>
            <div
              style={{
                display: "flex",
                width: "90%",
                padding: "24px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "8px",
                border: "1px solid var(--dark-mode-border-color, #252D3C)",
                background: "var(--dark-mode-background-secondary, #1C1C24)",
                marginTop: "30px",
              }}
            >
              <h2 style={{ marginBottom: "16px", color: "white" }}>
                Concert Details
              </h2>
              <DatePicker
                onChange={handleDateChange}
                placeholder="Select Date"
                style={{ marginBottom: "16px", width: "100%" }}
                suffixIcon={<CalendarOutlined style={{ color: "black" }} />}
              />
              <Select
                onChange={handleLocationChange}
                placeholder="Select Location"
                style={{ marginBottom: "16px", width: "100%" }}
                suffixIcon={<EnvironmentOutlined style={{ color: "black" }} />}
              >
                <Option value="location1">Concert Hall 1</Option>
                <Option value="location2">Arena Stage</Option>
                {/* Add more locations as needed */}
              </Select>
              <div
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <span style={{ marginRight: "8px" }}>Select Tickets:</span>
                <Button
                  icon={<MinusOutlined />}
                  style={{
                    marginRight: "8px",
                    background: "#333",
                    border: "none",
                    display: selectedConcertQuantity === 1 ? "none" : "block",
                  }}
                  onClick={() =>
                    handleQuantityChange(selectedConcertQuantity - 1)
                  }
                />
                <InputNumber
                  min={1}
                  max={10}
                  value={selectedConcertQuantity}
                  onChange={handleQuantityChange}
                  style={{
                    width: "60px",
                    background: "#333",
                    color: "white",
                    border: "none",
                  }}
                />
                <Button
                  icon={<PlusOutlined />}
                  style={{
                    marginLeft: "8px",
                    background: "#333",
                    border: "none",
                    display: selectedConcertQuantity === 10 ? "none" : "block",
                  }}
                  onClick={() =>
                    handleQuantityChange(selectedConcertQuantity + 1)
                  }
                />
              </div>
              <p style={{ marginBottom: "16px", color: "#555" }}>
                Total Price: Rs. {totalPrice}
              </p>
              <Button type="primary" danger style={{ width: "100%" }}>
                Buy Tickets
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EventDetail;
