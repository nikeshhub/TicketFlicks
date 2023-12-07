import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Theatres = () => {
  const [theatres, setTheatres] = useState([]);
  const navigate = useNavigate();

  const getTheatres = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual Ticketmaster API key
      const response = await axios({
        url: "https://app.ticketmaster.com/discovery/v2/events.json",
        method: "GET",
        params: {
          apikey: "tHiymJK0YKLPZlTXnaAKiZ8QW5v4CSe4",
          classificationName: "theatre", // Specify the classification for music/theatre events
          size: "3"
          
        },
      });

      setTheatres(response.data._embedded.events);
    } catch (error) {
      console.error("Error fetching theatre data:", error);
    }
  };

  useEffect(() => {
    getTheatres();
  }, []);

  const handleCardClick = (theatreId) => {
    navigate(`/events/${theatreId}`);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {theatres.map((theatre) => (
          <Col
            key={theatre.id}
            xs={24}
            sm={12}
            md={8}
            lg={12}
            xl={12}
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
                  alt={theatre.name}
                  src={
                    theatre.images && theatre.images.length > 0
                      ? theatre.images[4].url
                      : "https://placehold.it/500x750" // Placeholder image if no image is available
                  }
                />
              }
              onClick={() => {
                handleCardClick(theatre.id);
              }}
            >
              <Meta
                title={<span style={{ color: "white" }}>{theatre.name}</span>}
                description={
                  <span style={{ color: "white" }}>
                    Date:{" "}
                    {new Date(
                      theatre.dates.start.dateTime
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

export default Theatres;
