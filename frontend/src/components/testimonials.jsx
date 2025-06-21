import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonialsData = [
    {
      img: '/images/person/person-m-9.webp',
      name: 'Saul Goodman',
      title: 'Ceo & Founder',
      text:
        'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...',
    },
    {
      img: '/images/person/person-f-5.webp',
      name: 'Sara Wilsson',
      title: 'Designer',
      text:
        'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum...',
    },
    {
      img: '/images/person/person-f-12.webp',
      name: 'Jena Karlis',
      title: 'Store Owner',
      text:
        'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam...',
    },
    {
      img: '/images/person/person-m-12.webp',
      name: 'Matt Brandon',
      title: 'Freelancer',
      text:
        'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat...',
    },
    {
      img: '/images/person/person-m-13.webp',
      name: 'John Larson',
      title: 'Entrepreneur',
      text:
        'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster...',
    },
  ];

  return (
    <section id="testimonials" className="testimonials section py-5">
      <div className="container section-title text-center mb-4" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="testimonials-swiper"
        >
          {testimonialsData.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className="testimonial-item text-white"
                style={{
                  maxWidth: '600px',
                  margin: '0 auto',
                  backgroundColor: '#222',
                  borderRadius: '12px',
                  padding: '30px',
                  minHeight: '300px',
                }}
              >
                <div className="stars mb-3 text-warning">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="bi bi-star-fill me-1" />
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.85)' }}>{t.text}</p>
                <div className="profile mt-4 d-flex flex-column align-items-center">
                  <img
                    src={t.img}
                    className="testimonial-img rounded-circle mb-3"
                    alt={t.name}
                    style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                  />
                  <h3 className="mb-0">{t.name}</h3>
                  <h4 className="text-muted" style={{ fontSize: '14px' }}>
                    {t.title}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
