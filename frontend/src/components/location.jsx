import React from 'react'

const location = () => {
  return (
    <div>
      <section id="location" className="location section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Location</h2>
    <p>
      Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
      consectetur velit
    </p>
  </div>
  {/* End Section Title */}
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row g-4">
      <div className="col-lg-6" data-aos="fade-right" data-aos-delay={200}>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.684949335945!2d-73.98658242357565!3d40.75853057126168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMwLjciTiA3M8KwNTknMDcuNyJX!5e0!3m2!1sen!2sus!4v1654321234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="col-lg-6" data-aos="fade-left" data-aos-delay={200}>
        <div className="info-container">
          <div className="section-header">
            <h2>Find Us</h2>
            <p>Visit Us Today</p>
          </div>
          <div className="info-card" data-aos="fade-up" data-aos-delay={300}>
            <div className="info-icon">
              <i className="bi bi-geo-alt" />
            </div>
            <div className="info-content">
              <h3>Our Location</h3>
              <p>123 Culinary Avenue, Manhattan, NY 10001</p>
            </div>
          </div>
          <div className="info-card" data-aos="fade-up" data-aos-delay={400}>
            <div className="info-icon">
              <i className="bi bi-telephone" />
            </div>
            <div className="info-content">
              <h3>Reservations</h3>
              <p>+1 (212) 555-7890</p>
              <p className="small-text">
                We recommend making reservations at least 48 hours in advance
              </p>
            </div>
          </div>
          <div className="info-card" data-aos="fade-up" data-aos-delay={500}>
            <div className="info-icon">
              <i className="bi bi-clock" />
            </div>
            <div className="info-content">
              <h3>Hours</h3>
              <div className="hours-grid">
                <div className="day">Monday - Thursday</div>
                <div className="time">11:00 AM - 10:00 PM</div>
                <div className="day">Friday - Saturday</div>
                <div className="time">11:00 AM - 11:30 PM</div>
                <div className="day">Sunday</div>
                <div className="time">10:00 AM - 9:00 PM</div>
                <div className="day">Brunch Hours</div>
                <div className="time">Sat &amp; Sun, 10:00 AM - 2:00 PM</div>
              </div>
            </div>
          </div>
          <div className="cta-wrapper" data-aos="fade-up" data-aos-delay={600}>
            <a href="#" className="btn-book">
              Make a Reservation
            </a>
            <a href="#" className="btn-contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default location
