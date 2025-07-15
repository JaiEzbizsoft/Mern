import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import axios from 'axios';

const MenuCategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/menu-items/${category}`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <>
      <div
        className="py-0"
        style={{
          backgroundColor: 'black',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <div className="container">
          <h2 className="text-center text-white fw-bold mb-5 text-capitalize text-shadow">
            {category.replace('-', ' ')}
          </h2>

          <div className="row">
            {items.length > 0 ? (
              items.map((item, i) => (
                <div key={i} className="col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div
                    className="card border-0 shadow-sm"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = 'translateY(-6px)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = 'translateY(0)')
                    }
                  >
                    <img
  src={item.image ? `http://localhost:5000${item.image}` : 'https://via.placeholder.com/300x200.png?text=No+Image'}
  className="card-img-top"
  alt={item.title}
  style={{ height: '200px', objectFit: 'cover' }}
/>

                    <div className="card-body text-center text-white">
                      <h5 className="card-title mb-0">{item.title}</h5>
                      {item.description && (
                        <p className="small mt-1">{item.description}</p>
                      )}
                      {item.price && (
                        <p className="fw-bold">₹{item.price}</p>
                      )}
                    </div>
                    <div
                      style={{
                        height: '5px',
                        backgroundColor: '#889048',
                        width: '100%',
                      }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white fs-5">No items found for this category.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCategoryPage;
 