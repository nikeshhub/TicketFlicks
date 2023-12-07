//Page to show movies
import React, { useEffect, useState } from "react";
import {  Card, Row, Col } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const omdbApiKey = "53e0f92c";

  const getMovies = async () => {
    try {
      const response = await axios({
        url: `https://www.omdbapi.com/?s=movie&type=movie&apikey=${omdbApiKey}`,
        method: "GET",
      });
      setMovies(response.data.Search);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleCardClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {movies.map((value) => (
          <Col
            key={value.imdbID}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            style={{ marginBottom: "16px" }}
          >
            <Card
              hoverable
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
              }}
              cover={<img alt={value.Title} src={value.Poster} />}
              onClick={() => {
                handleCardClick(value.imdbID);
              }}
            >
              <Meta
                title={<span style={{ color: "white" }}>{value.Title}</span>}
                description={
                  <span style={{ color: "white" }}>Year: {value.Year}</span>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Movies;
