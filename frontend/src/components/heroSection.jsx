import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // For navigation buttons
import { Navigation } from 'swiper/modules';

const HeroSection = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container-fluid hero-container" data-aos="fade-up">
        <div className="row g-0 align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 content-col">
            <div className="content-wrapper">
              <div className="status-badge">Reservations Open</div>
              <h2>Savor the Moment, One Bite at a Time</h2>
              <p>
                Discover a journey of flavors at our exquisite restaurant.
                Immerse yourself in a delightful dining experience crafted
                with passion and precision.
              </p>

              <div className="opening-hours" data-aos="fade-up" data-aos-delay={500}>
                <i className="bi bi-clock" />
                <span>Open Daily: 11am - 10pm</span>
              </div>

              <div className="btn-group">
                <a href="#book-a-table" className="btn btn-book">
                  Book a Table
                </a>
                <a href="#menu" className="btn btn-menu">
                  Explore Our Menu
                </a>
              </div>

              <div className="social-links">
                <a href="#"><i className="bi bi-facebook" /></a>
                <a href="#"><i className="bi bi-instagram" /></a>
                <a href="#"><i className="bi bi-twitter" /></a>
                <a href="#"><i className="bi bi-youtube" /></a>
              </div>
            </div>
          </div>

          {/* Swiper Carousel */}
          <div className="col-lg-6 swiper-col">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="hero-swiper"
            >
              <SwiperSlide>
                <div className="img-container">
                  <img
                    src="/images/restaurant/misc-square-1.webp"
                    alt="Restaurant Ambience"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img-container">
                  <img
                    src="/images/restaurant/misc-square-2.webp"
                    alt="Signature Dish"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img-container">
                  <img
                    src="/images/restaurant/misc-square-3.webp"
                    alt="Expert Chefs"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
