import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // State hooks inside the component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("Login successful");

        // Save to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.name);  

        // Navigate to dashboard
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }

    } catch (err) {
      console.error(err);
      alert("Error logging in");
    }
  };

  return (
    <div className="wrapper">
      <section className="container-login">
        <div className="card rounded-3 shadow-lg w-100 overflow-hidden">
          <div className="row g-0">
            {/* Left side */}
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-4 bg-white">
              <div className="text-center mb-3">
                <Link
                  to="/"
                  className="logo d-flex flex-column align-items-center text-decoration-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="#878f47"
                    className="bi bi-fork-knife"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
                  </svg>
                  <h6 className="site-title mt-2 mb-0 text-dark">Saanjh by Rajasthan</h6>
                </Link>
              </div>

              <form className="w-100 px-3" onSubmit={handleLogin}>
                <p className="text-start mb-4 small text-muted">
                  Please login to your account
                </p>

                <div className="form-outline mb-3">
                  <label className="form-label small text-muted mb-1">Email address</label>
                  <input
                    type="email"
                    className="form-control py-2"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label small text-muted mb-1">Password</label>
                  <input
                    type="password"
                    className="form-control py-2"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <button type="submit" className="btn btn-login px-4 py-2">
                    Log in
                  </button>
                  <a href="#!" className="text-muted small">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center">
                  <p className="mb-0 small">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="btn btn-sm"
                      style={{ color: "#6d7436" }}
                      onClick={() => navigate("/signup")}
                    >
                      Create new
                    </button>
                  </p>
                </div>
              </form>
            </div>

            {/* Right side */}
            <div className="col-lg-6 d-none d-lg-flex position-relative p-0">
              <div className="info-image"></div>
              <div className="info-content text-white text-center p-4 position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div>
                  <h5 className="mb-3 fw-semibold">Saanjh by Rajasthan</h5>
                  <p className="small mb-0">
                    From handcrafted thalis to royal decor inspired by desert forts and folk art,
                    every element reflects the vibrant soul of Rajasthan. Step into a place where
                    every dinner feels like a celebration of tradition, taste, and timeless culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .wrapper {
          height: 100dvh;
          padding: 1rem;
          background: url("https://images.pexels.com/photos/1719173/pexels-photo-1719173.jpeg")
            no-repeat center center;
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

export default Login;
