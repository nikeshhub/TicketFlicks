//component to show concert page.

import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Concerts = () => {
  const [concerts, setConcerts] = useState([]);
  const navigate = useNavigate();

  const getConcerts = async () => {
    try {
      //fetching concerts data
      const response = await axios({
        url: "https://app.ticketmaster.com/discovery/v2/events.json",
        method: "GET",
        params: {
          apikey: "tHiymJK0YKLPZlTXnaAKiZ8QW5v4CSe4",
          classificationName: "concert",
        },
      });
      //setting concert data
      setConcerts(response.data._embedded.events);
    } catch (error) {
      console.error("Error fetching concert data:", error);
    }
  };

  useEffect(() => {
    getConcerts();
  }, []);
  //navigating to concert single page
  const handleCardClick = (concertId) => {
    navigate(`/events/${concertId}`);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {concerts.map((concert) => (
          <Col
            key={concert.id}
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            style={{ marginBottom: "16px" }}
          >
            <Card
              hoverable
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
              }}
              cover={
                <img
                  alt={concert.name}
                  src={
                    concert.images && concert.images.length > 0
                      ? concert.images[1].url
                      : "https://placehold.it/500x750" // in case no images come
                  }
                />
              }
              onClick={() => {
                handleCardClick(concert.id);
              }}
            >
              <Meta
                title={<span style={{ color: "white" }}>{concert.name}</span>}
                description={
                  <span style={{ color: "white" }}>
                    Date:{" "}
                    {new Date(
                      concert.dates.start.dateTime
                    ).toLocaleDateString()}
                  </span>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Concerts;
