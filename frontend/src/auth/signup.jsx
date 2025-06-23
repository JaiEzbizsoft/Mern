
      import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      

      const data = await res.json();

      if (res.status === 201) {
        alert("Signup successful");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="wrapper">
      <section className="container-login">
        <div className="card rounded-3 shadow-lg w-100 overflow-hidden">
          <div className="row g-0">
            {/* Left Side */}
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-4 bg-white">
              <div className="text-center mb-3">
                <Link to="/" className="logo d-flex flex-column align-items-center text-decoration-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#878f47" className="bi bi-fork-knife" viewBox="0 0 16 16">
                    <path d="..."/>
                  </svg>
                  <h6 className="site-title mt-2 mb-0 text-dark">Saanjh by Rajasthan</h6>
                </Link>
              </div>

              <form className="w-100 px-3" onSubmit={handleSignup}>
                <p className="text-start mb-4 small text-muted">Create your account</p>

                <div className="form-outline mb-3">
                  <label className="form-label small text-muted mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control py-2"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label small text-muted mb-1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control py-2"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label small text-muted mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control py-2"
                    placeholder="Create a password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <button type="submit" className="btn btn-login px-4 py-2">Register</button>
                </div>

                <div className="text-center">
                  <p className="mb-0 small">
                    Already have an account?{" "}
                    <button type="button" className="btn btn-sm" style={{ color: "#6d7436" }} onClick={() => navigate("/login")}>
                      Log in
                    </button>
                  </p>
                </div>
              </form>
            </div>

            {/* Right side with image */}
            <div className="col-lg-6 d-none d-lg-flex position-relative p-0">
              <div className="info-image"></div>
              <div className="info-content text-white text-center p-4 position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div>
                  <h5 className="mb-3 fw-semibold">Saanjh by Rajasthan</h5>
                  <p className="small mb-0">
                    From handcrafted thalis to royal decor inspired by desert forts and folk art...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <style jsx>{`
        .wrapper {
          height: 100dvh;
          padding: 1rem;
          background: url("https://images.pexels.com/photos/1719173/pexels-photo-1719173.jpeg") no-repeat center center;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container-login {
          max-width: 880px;
          width: 100%;
        }

        .info-image {
          background: url("/images/bg/bglogin.png") no-repeat center center/cover;
          filter: brightness(0.5);
          width: 100%;
          height: 100%;
        }

        .info-content {
          z-index: 2;
          background: rgba(0, 0, 0, 0.4);
          border-top-right-radius: 0.3rem;
          border-bottom-right-radius: 0.3rem;
        }

        .btn-login {
          background-color: #878f47;
          border: none;
          color: #fff;
        }

        .btn-login:hover {
          background-color: #6d7436;
        }

        .site-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #000000;
        }

        .logo svg {
          width: 26px;
          height: 26px;
        }

        .form-label,
        .form-control {
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Signup;
