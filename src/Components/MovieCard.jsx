//Single Movie Card
import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const MovieCard = ({ movieData }) => {
  return (
    <Card
      hoverable
      style={{
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "20%",
        width: "100%",
      }}
      cover={<img alt={movieData.Title} src={movieData.Poster} style={{ objectFit: "contain" }} />}
    >
      <Meta
        title={<span style={{ color: "white" }}>{movieData.Title}</span>}
        description={<span style={{ color: "white" }}>Release Date: {movieData.Released}</span>}
      />
    </Card>
  );
};

export default MovieCard;
