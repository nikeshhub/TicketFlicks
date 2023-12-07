import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, DatePicker, Select, InputNumber } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,

  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import EventDetails from "./EventDetails";

const { Meta } = Card;
const { Option } = Select;

const TheatreandConcerts = () => {
  const { id } = useParams();
  const [concertData, setConcertData] = useState(null);
const navigate = useNavigate()

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



  const handleBuyTicket = () => {
    navigate(`/events/${concertData.id}/${selectedConcertQuantity}`);
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
        {concertData && (
            <EventDetails
              date="Sat, Apr 30, 2022 11:30 AM"
              location="Kathmandu, Nepal"
              quantity={selectedConcertQuantity}
              totalPrice={totalPrice}
              handleQuantityChange={handleQuantityChange}
              handleBuyTicket={handleBuyTicket}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default TheatreandConcerts;
