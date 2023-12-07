// EventDetailsPage.js
import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

import EventDetails from "./EventDetails";

const EventDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [selectedMovieQuantity, setSelectedMovieQuantity] = useState(1);
  const moviePrice = 500;

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=53e0f92c&i=${id}`);
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [id]);

  const handleQuantityChange = (value) => {
    setSelectedMovieQuantity(value);
  };

  const totalPrice = moviePrice * selectedMovieQuantity;

  const handleBuyTicket = () => {
    navigate(`/movies/${movieData.imdbID}/${selectedMovieQuantity}`);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8} lg={6} xl={6}>
          {movieData && <MovieCard movieData={movieData} />}
        </Col>
        <Col xs={0} md={0} lg={8} xl={8} />
        <Col xs={24} md={24} lg={10} xl={10}>
          {movieData && (
            <EventDetails
              date="Sat, Apr 30, 2022 11:30 AM"
              location="Kathmandu, Nepal"
              quantity={selectedMovieQuantity}
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

export default EventDetailsPage;
