import React from 'react'

const bookATable = () => {
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
            <div className="reservation-details mt-4">
              <div className="detail-item">
                <i className="bi bi-clock" />
                <div>
                  <h5>Opening Hours</h5>
                  <p>
                    Monday - Friday: 11:00 AM - 11:00 PM
                    <br />
                    Saturday - Sunday: 10:00 AM - 12:00 AM
                  </p>
                </div>
              </div>
              <div className="detail-item">
                <i className="bi bi-geo-alt" />
                <div>
                  <h5>Location</h5>
                  <p>
                    1234 Main Street, Suite 100
                    <br />
                    Boston, MA 02110
                  </p>
                </div>
              </div>
              <div className="detail-item">
                <i className="bi bi-telephone" />
                <div>
                  <h5>Call Us</h5>
                  <p>+1 (617) 555-1234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
        <div className="reservation-image">
          <img
            src="/images/restaurant/showcase-7.webp"
            alt="Restaurant interior"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12" data-aos="fade-up" data-aos-delay={400}>
        <div className="reservation-form-wrapper">
          <div className="form-header">
            <h3>Book A Table</h3>
            <p>Please fill the form below to make a reservation</p>
          </div>
          <form
            action="forms/book-a-table.php"
            method="post"
            role="form"
            className="php-email-form mt-4"
          >
            <div className="row gy-4">
              <div className="col-lg-4 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col-lg-4 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div className="col-lg-4 form-group">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Your Phone"
                  required=""
                />
              </div>
              <div className="col-lg-4 form-group">
                <select name="people" className="form-select" required="">
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
                  placeholder="Date"
                  required=""
                />
              </div>
              <div className="col-lg-4 form-group">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  id="time"
                  placeholder="Time"
                  required=""
                />
              </div>
              <div className="form-group mt-4">
                <textarea
                  className="form-control"
                  name="message"
                  rows={3}
                  placeholder="Special Requests (Optional)"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your booking request was sent. We will call back or send an
                Email to confirm your reservation. Thank you!
              </div>
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
  )
}

export default bookATable