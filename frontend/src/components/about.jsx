import React from 'react'

const about = () => {
  return (
    <div>
        <section id="about" className="about section">
  <div className="container" data-aos="fade-up" data-aos-delay={100}>
    <div className="row align-items-center gy-4">
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
        <div className="about-content">
          <h3>Our Culinary Journey</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p>
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
            id rutrum lorem imperdiet. Nunc ut sem vitae risustristique pos
            uere. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <div className="chef-signature mt-4">
            <div className="row align-items-center">
              <div className="col-auto">
                <img
                  src="images/restaurant/chef-1.webp"
                  className="chef-avatar rounded-circle"
                  alt="Chef Portrait"
                />
              </div>
              <div className="col">
                <p className="chef-message mb-2">
                  "Cooking is a language through which all the following
                  properties may be expressed: harmony, creativity, happiness,
                  beauty, poetry, complexity, magic, humor, provocation and
                  culture."
                </p>
                <p className="chef-name">Executive Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={300}>
        <div className="about-image-wrapper">
          <img
            src="/images/restaurant/showcase-4.webp"
            className="img-fluid main-image shadow"
            alt="Restaurant Interior"
          />
          <img
            src="/images/restaurant/showcase-2.webp"
            className="img-fluid accent-image shadow"
            alt="Chef Preparing Food"
          />
          <span className="establishment-year d-flex align-items-center justify-content-center text-center">
            Est. 2005
          </span>
        </div>
      </div>
    </div>
    <div className="row mt-5 pt-4 features-section">
      <div
        className="col-lg-3 col-md-6 mb-4"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <div className="feature-box">
          <div className="feature-icon">
            <i className="bi bi-award" />
          </div>
          <h4>Award Winning</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 mb-4"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="feature-box">
          <div className="feature-icon">
            <i className="bi bi-egg-fried" />
          </div>
          <h4>Fresh Ingredients</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla.
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 mb-4"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        <div className="feature-box">
          <div className="feature-icon">
            <i className="bi bi-people" />
          </div>
          <h4>Expert Team</h4>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit.
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 mb-4"
        data-aos="fade-up"
        data-aos-delay={500}
      >
        <div className="feature-box">
          <div className="feature-icon">
            <i className="bi bi-heart" />
          </div>
          <h4>Cooked with Love</h4>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </p>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-lg-12" data-aos="fade-up" data-aos-delay={200}>
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">
              <span
                data-purecounter-start={0}
                data-purecounter-end={15}
                data-purecounter-duration={0}
                className="purecounter"
              >
                15
              </span>
              +
            </span>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              <span
                data-purecounter-start={0}
                data-purecounter-end={5}
                data-purecounter-duration={0}
                className="purecounter"
              >
                5
              </span>
            </span>
            <p className="stat-label">Expert Chefs</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              <span
                data-purecounter-start={0}
                data-purecounter-end={3}
                data-purecounter-duration={0}
                className="purecounter"
              >
                3
              </span>
            </span>
            <p className="stat-label">Culinary Awards</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              <span
                data-purecounter-start={0}
                data-purecounter-end={15000}
                data-purecounter-duration={0}
                className="purecounter"
              >
                15000
              </span>
              +
            </span>
            <p className="stat-label">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default about