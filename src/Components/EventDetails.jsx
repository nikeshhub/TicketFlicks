// EventDetailsAndTicketSelection.js
import React from "react";
import { Divider, Space, Button, InputNumber } from "antd";
import { CalendarOutlined, EnvironmentOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";

const EventDetails = ({
  date,
  location,
  quantity,
  totalPrice,
  handleQuantityChange,
  handleBuyTicket,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        padding: "20px",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: "8px",
        border: "1px solid var(--dark-mode-border-color, #252D3C)",
        background: "var(--dark-mode-background-secondary, #1C1C24)",
        marginTop: "30px",
      }}
    >
      <h2 style={{ margin: "0" }}>Concert Details</h2>
      <Divider style={{ background: "#97ABC0" }} />
      <Space>
        <div
          style={{
            width: "50px",
            height: "50px",
            background: "#333",
            color: "white",
            border: "none",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CalendarOutlined />
        </div>
        <div>
          <p style={{ color: "#97ABC0" }}>Date and Time</p>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>{date}</p>
        </div>
      </Space>
      <Divider style={{ background: "#97ABC0" }} />
      <Space>
        <div
          style={{
            width: "50px",
            height: "50px",
            background: "#333",
            color: "white",
            border: "none",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EnvironmentOutlined />
        </div>
        <div>
          <p style={{ color: "#97ABC0" }}>Location</p>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>{location}</p>
          <p style={{ color: "red" }}>View on map</p>
        </div>
      </Space>
      <Divider style={{ background: "#97ABC0" }} />
      <h2>Select Tickets</h2>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div>
          <p style={{ color: "#555", fontSize: "20px" }}>{quantity} x Tickets </p>
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Rs. {totalPrice}</p>
        </div>
        <Space>
          <Button
            icon={<MinusOutlined />}
            style={{
              marginRight: "8px",
              background: "#333",
              border: "none",
              display: quantity === 1 ? "none" : "block",
              borderRadius: "50%",
            }}
            onClick={() => handleQuantityChange(quantity - 1)}
          />
          <InputNumber
            min={1}
            max={10}
            value={quantity}
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
              background: "#E14658",
              borderRadius: "50%",
              border: "none",
              display: quantity === 10 ? "none" : "block",
            }}
            onClick={() => handleQuantityChange(quantity + 1)}
          />
        </Space>
      </div>
      <Button
        type="primary"
        danger
        style={{ width: "100%" }}
        onClick={() => handleBuyTicket()}
      >
        Buy Tickets
      </Button>
    </div>
  );
};

export default EventDetails;
