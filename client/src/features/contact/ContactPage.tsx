import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add functionality to handle form submission (e.g., send email)
    console.log(formData);
    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
      <Typography variant="h2" sx={{ marginBottom: 3 }}>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </Box>
  );
}
