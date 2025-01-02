import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    bookingType: "stay",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    guests: 1,
    eventType: "",
    eventDate: "",
    attendees: 50,
    specialRequests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/bookings", formData);
      console.log("Booking submitted:", response.data);
      alert("Booking successful!");
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking.");
    }
  };

  return (
    <StyledWrapper>
      <div className="card">
        <span className="title">Booking Form</span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="group">
            <select
              id="bookingType"
              name="bookingType"
              value={formData.bookingType}
              onChange={handleChange}
              className="input long"
            >
              <option value="stay">Stay</option>
              <option value="event">Event</option>
            </select>
            <label htmlFor="bookingType">Booking Type</label>
          </div>

          <div className="row">
            <div className="group half">
              <input
                placeholder="‎"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="group half">
              <input
                placeholder="‎"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>

          <div className="group">
            <input
              placeholder="‎"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input long"
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          {formData.bookingType === "stay" && (
            <div className="row">
              <div className="group half">
                <input
                  placeholder="‎"
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="checkInDate">Check-In Date</label>
              </div>
              <div className="group half">
                <input
                  placeholder="‎"
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="checkOutDate">Check-Out Date</label>
              </div>
            </div>
          )}

          {formData.bookingType === "event" && (
            <>
              <div className="group">
                <input
                  placeholder="‎"
                  type="text"
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="eventType">Event Type</label>
              </div>

              <div className="group">
                <input
                  placeholder="‎"
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="eventDate">Event Date</label>
              </div>
            </>
          )}

          <div className="group">
            <textarea
              placeholder="‎"
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={8}
            />
            <label htmlFor="specialRequests">Special Requests</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  .form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .group {
    position: relative;
    margin-bottom: 20px;
  }

  .row {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .row {
      flex-direction: row;
    }
  }

  .group.half {
    flex: 1;
  }

  .group label {
    font-size: 14px;
    color: rgb(99, 102, 102);
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  .group input,
  .group textarea,
  .group select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: 0;
    width: 100%;
    background-color: transparent;
  }

  .group input.long,
  .group textarea.long,
  .group select.long {
    width: 100%;
  }

  .group input:placeholder-shown + label,
  .group textarea:placeholder-shown + label,
  .group select:placeholder-shown + label {
    top: 10px;
    background-color: transparent;
  }

  .group input:focus,
  .group textarea:focus,
  .group select:focus {
    border-color: #3366cc;
  }

  .group input:focus + label,
  .group textarea:focus + label,
  .group select:focus + label {
    top: -10px;
    left: 10px;
    background-color: #fff;
    color: #3366cc;
    font-weight: 600;
    font-size: 14px;
  }

  .form button {
    background-color: #1f4f4f;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .form button:hover {
    background-color: #1a3d3d;
  }
`;

export default BookingPage;
