// TicketSelection.js
import React from "react";
import { Divider, Space, Button, InputNumber } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const TicketSelection = ({ quantity, totalPrice, handleQuantityChange, handleBuyTicket }) => {
  return (
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
      <Divider style={{ background: "#97ABC0" }} />
      <h2>Select Tickets</h2>
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

export default TicketSelection;
