import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert(err?.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div
      className="text-light min-vh-100 d-flex align-items-center"
      style={{ backgroundColor: '#e05b7c' }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="rounded-4 overflow-hidden  ">
            <Row className="g-0 flex-column flex-md-row">
              {/* Left image */}
              <Col md={6} className="bg-img-login">
                <Image
                  src="/images/restaurant/login.jpeg"
                  alt="Login visual"
                  className="w-100 h-100 object-fit-cover"
                  style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', height: '100%' }}
                />
              </Col>

              {/* Right form */}
              <Col
                md={6}
                xs={12}
                className="p-5 position-relative d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: 'black',
                  borderTopRightRadius: '20px',
                  borderBottomRightRadius: '20px',
                }}
              >
                {/* Icon at top-left */}
                <div className="position-absolute top-0 start-50 translate-middle-x p-3 mt-1">
  <Image
    src="https://cdn-icons-png.flaticon.com/128/6077/6077349.png"
    alt="Logo"
    style={{ width: '60px', height: '60px' }}
  />
</div>


                <div className="text-center mb-4">
                  <h3 className="mt-2 text-white">Sizzle & Sage</h3>
                  <p className="text-light">Login to your account</p>
                </div>

                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="text-light">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-dark text-light border-secondary"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={form.password}
                      onChange={handleChange}
                      className="bg-dark text-light border-secondary"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 py-2 fw-bold"
                    style={{ backgroundColor: '#e05b7c', border: 'none' }}
                  >
                    Login
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
