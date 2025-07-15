import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const MainMenuPreview = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/category");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section
      id="menu-section"
      className="py-5"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white d-inline-block position-relative">
            <span
              className="px-3"
              style={{
                borderLeft: "3px solid #889048",
                borderRight: "3px solid #889048",
              }}
            >
              Menu
            </span>
          </h2>
          <p className="text-white mt-2">
            Discover our wide range of delicious dishes, sorted by category.
          </p>
        </div>

        <div className="row g-4">
          {categories.map((cat, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <Link
                to={`/menu/${cat.name.toLowerCase().replace(" ", "-")}`}
                className="text-decoration-none"
              >
                <div
                  className="card border-0 position-relative"
                  style={{
                    overflow: "hidden",
                    transition: "transform 0.3s ease-in-out",
                    height: "300px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <img
                    src={
                      cat.image
                        ? `http://localhost:5000${cat.image}`
                        : "https://via.placeholder.com/300x200.png?text=No+Image"
                    }
                    className="card-img"
                    alt={cat.name}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      width: "100%",
                      borderRadius: "0px",
                    }}
                  />

                  <div
                    className="position-absolute bottom-0 w-100 px-4 py-3 d-flex justify-content-between align-items-center"
                    style={{
                      background: "#889048",
                      color: "#fff",
                    }}
                  >
                    <h5 className="mb-0">{cat.name}</h5>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainMenuPreview;
