import React, { useState } from 'react';
import axios from 'axios';

const BookATable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    people: '',
    date: '',
    time: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send POST request to the backend to save the booking and send email
      const response = await axios.post('http://localhost:5000/api/bookings/book', formData);
      setMessage('Your booking request was sent. We will confirm your reservation soon.');
      setLoading(false);
    } catch (error) {
      setMessage('There was an error while submitting your request. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      <section id="book-a-table" className="book-a-table section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-5 mb-5">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay={200}>
              <div className="reservation-info">
                <div className="text-content">
                  <h3>Book Your Table</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    Aliquam erat volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
              <div className="reservation-form-wrapper">
                <div className="form-header">
                  <h3>Book A Table</h3>
                  <p>Please fill the form below to make a reservation</p>
                </div>
                <form onSubmit={handleSubmit} className="php-email-form mt-4">
                  <div className="row gy-4">
                    <div className="col-lg-4 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-4 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-4 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-4 form-group">
                      <select
                        name="people"
                        className="form-select"
                        value={formData.people}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Number of guests</option>
                        <option value={1}>1 Person</option>
                        <option value={2}>2 People</option>
                        <option value={3}>3 People</option>
                        <option value={4}>4 People</option>
                        <option value={5}>5 People</option>
                        <option value={6}>6+ People</option>
                      </select>
                    </div>
                    <div className="col-lg-4 form-group">
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-4 form-group">
                      <input
                        type="time"
                        className="form-control"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group mt-4">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={3}
                        placeholder="Special Requests (Optional)"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="my-3">
                    {loading ? <div className="loading">Loading...</div> : null}
                    <div className="sent-message">{message}</div>
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="btn-book-table">
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookATable;
