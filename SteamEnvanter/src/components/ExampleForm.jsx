import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography
} from "@mui/material";

export default function ExampleForm() {
  const [formData, setFormData] = useState({
    tradeLink: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form başarıyla gönderildi!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        mx: "auto",
        mt: 5,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Kayıt Formu
      </Typography>

      <TextField
        label="Trade Linkinizi Giriniz"
        name="tradeLink"
        value={formData.tradeLink}
        onChange={handleChange}
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Gönder
      </Button>
    </Box>
  );
}
