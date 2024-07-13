import React, { useState } from "react";
import axios from "axios";

const CreateAdvertisement = () => {
  const [form, setForm] = useState({
    purpose: "",
    property_type: "",
    location: "",
    dynamic_attributes: {},
  });
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create Advertisement
      const response = await axios.post("/api/advertisements", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const advertisementId = response.data.id;

      // Step 2: Upload Images
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      await axios.post(
        `/api/advertisements/${advertisementId}/images/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Advertisement and images uploaded successfully!");
    } catch (error) {
      setMessage("Failed to create advertisement or upload images");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="purpose"
          value={form.purpose}
          onChange={handleInputChange}
          placeholder="Purpose"
        />
        <input
          type="text"
          name="property_type"
          value={form.property_type}
          onChange={handleInputChange}
          placeholder="Property Type"
        />
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleInputChange}
          placeholder="Location"
        />
        <textarea
          name="dynamic_attributes"
          value={JSON.stringify(form.dynamic_attributes)}
          onChange={handleInputChange}
          placeholder="Dynamic Attributes"
        />
        <input type="file" multiple onChange={handleFileChange} />
        <button type="submit">Create Advertisement and Upload Images</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateAdvertisement;
