import React from 'react'

const moments = () => {
  return (
    <div> 
        <section id="events" className="events section">
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div
      className="intro-text text-center mb-5"
      data-aos="fade-up"
      data-aos-delay={150}
    >
      <h2>Create Unforgettable Moments</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida
        nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
        auctor, nisi elit consequat ipsum.
      </p>
    </div>
    <div className="event-types">
      <div className="row">
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="event-type-card">
            <div className="icon-wrapper">
              <i className="bi bi-calendar-heart" />
            </div>
            <h3>Weddings &amp; Celebrations</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <span className="capacity">Up to 150 guests</span>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={250}
        >
          <div className="event-type-card">
            <div className="icon-wrapper">
              <i className="bi bi-building" />
            </div>
            <h3>Corporate Events</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <span className="capacity">Up to 100 guests</span>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="event-type-card">
            <div className="icon-wrapper">
              <i className="bi bi-people" />
            </div>
            <h3>Private Gatherings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <span className="capacity">Up to 50 guests</span>
          </div>
        </div>
      </div>
    </div>
    <div className="gallery-showcase" data-aos="fade-up" data-aos-delay={150}>
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="main-image" data-aos="zoom-in" data-aos-delay={200}>
            <img
              src="/images/restaurant/event-1.webp"
              alt="Event Space"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row g-3">
            <div className="col-lg-12 col-md-6">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay={250}
              >
                <img
                  src="/images/restaurant/event-5.webp"
                  alt="Event"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <img
                  src="/images/restaurant/event-7.webp"
                  alt="Event"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="event-cta" data-aos="fade-up" data-aos-delay={200}>
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h3>Ready to plan your special event?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
            justo magna. Contact us today to discuss your requirements.
          </p>
        </div>
        <div className="col-lg-4 text-lg-end">
          <a href="#" className="btn-reserve">
            Reserve Venue
          </a>
        </div>
      </div>
    </div>
    <div className="featured-events" data-aos="fade-up" data-aos-delay={200}>
      <h3>Upcoming Featured Events</h3>
      <div className="row g-4">
        <div className="col-lg-6 col-md-6">
          <div
            className="featured-event-card"
            data-aos="fade-up"
            data-aos-delay={250}
          >
            <div className="event-date">
              <span className="month">Jun</span>
              <span className="day">18</span>
            </div>
            <div className="event-content">
              <div className="event-image">
                <img
                  src="/images/restaurant/event-3.webp"
                  alt="Summer Wine Festival"
                  className="img-fluid"
                />
              </div>
              <div className="event-info">
                <h4>Summer Wine Festival</h4>
                <ul className="event-meta">
                  <li>
                    <i className="bi bi-clock" /> 6:00 PM - 10:00 PM
                  </li>
                  <li>
                    <i className="bi bi-geo-alt" /> Garden Terrace
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sed justo magna dolor sit amet.
                </p>
                <a href="#" className="btn-details">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div
            className="featured-event-card"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="event-date">
              <span className="month">Jul</span>
              <span className="day">05</span>
            </div>
            <div className="event-content">
              <div className="event-image">
                <img
                  src="/images/restaurant/event-8.webp"
                  alt="Gourmet Tasting Night"
                  className="img-fluid"
                />
              </div>
              <div className="event-info">
                <h4>Gourmet Tasting Night</h4>
                <ul className="event-meta">
                  <li>
                    <i className="bi bi-clock" /> 7:30 PM - 11:00 PM
                  </li>
                  <li>
                    <i className="bi bi-geo-alt" /> Main Dining Hall
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sed justo magna dolor sit amet.
                </p>
                <a href="#" className="btn-details">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default moments