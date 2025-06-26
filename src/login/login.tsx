
import React, { useState } from "react";
import loginImg from "../assets/login-page-img.PNG";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd: string): boolean => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pwd);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // First validate password format
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters, with 1 capital letter, 1 number, and 1 symbol."
      );
      return;
    }

    // Now check dummy credentials
    const dummyEmail = "test@example.com";
    const dummyPassword = "Test@1234";

    if (email !== dummyEmail || password !== dummyPassword) {
      setError("Invalid username or password");
      return;
    }

    // All good → clear error and navigate
    setError("");
    navigate("/home");
  };

  return (
    // <Container fluid className="d-flex align-items-center justify-content-center vh-100">
    // <Container fluid className="d-flex align-items-center vh-100 ps-5">
    // <Container
    //   fluid
    //   className="d-flex align-items-center vh-100"
    //   style={{ paddingLeft: "5rem" }}
    // >
    //   <Row className="w-100" style={{ maxWidth: "500px" }}>
    //     <Col className="p-4">
    //       <h2>Sign In</h2>
    //       <strong>
    //         New user?{" "}
    //         <a href="#" style={{ textDecoration: "none" }}>
    //           Create an account
    //         </a>
    //       </strong>
    //       {error && <Alert variant="danger">{error}</Alert>}
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group className="mb-3">
    //           <Form.Control
    //             type="text"
    //             placeholder="Username or email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //             style={{ border: "2px solid #000", borderRadius: 0 }}
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3">
    //           <Form.Control
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //             style={{ border: "2px solid #000", borderRadius: 0 }}
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3 d-flex align-items-center">
    //           <Form.Check
    //             type="checkbox"
    //             id="keepSignedIn"
    //             checked={keepSignedIn}
    //             onChange={(e) => setKeepSignedIn(e.target.checked)}
    //             style={{ transform: "scale(1.5)", marginRight: "10px" }}
    //           />
    //           {/* <Form.Label htmlFor="keepSignedIn" className="mb-0"> */}
    //           <Form.Label htmlFor="keepSignedIn" className="mb-0 fw-bold">
    //             Keep me signed in
    //           </Form.Label>
    //         </Form.Group>
    //         <Button
    //           type="submit"
    //           variant="dark"
    //           className="w-100"
    //           style={{ fontWeight: "bold", borderRadius: 0 }}
    //         >
    //           Sign In
    //         </Button>
    //       </Form>

    //       {/* <div className="d-flex align-items-center my-3">
    //         <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></div>
    //         <div className="mx-2">Or Sign In With</div>
    //         <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></div>
    //       </div> */}
    //       <div className="d-flex align-items-center my-3">
    //         <div
    //           style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}
    //         ></div>
    //         <div className="mx-2 fw-bold">Or Sign In With</div>
    //         <div
    //           style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}
    //         ></div>
    //       </div>

    //       <div className="d-flex justify-content-center gap-2">
    //         {["google", "facebook", "linkedin", "twitter"].map((icon, idx) => (
    //           <Button
    //             key={idx}
    //             variant="outline-dark"
    //             size="sm"
    //             className="rounded-circle d-flex align-items-center justify-content-center"
    //             style={{ width: "40px", height: "40px", padding: 0 }}
    //           >
    //             <i className={`bi bi-${icon}`}></i>
    //           </Button>
    //         ))}
    //       </div>
    //     </Col>

    //     {/* <Col
    //     //   md={6}
    //     //   className="d-none d-md-flex justify-content-center align-items-center"
    //     > */}
    //       {/* <img
    //         // src="https://via.placeholder.com/300x300?text=Illustration"
    //         // src="login-page-img.PNG"
    //        src = './assets/login-page-img.PNG'
    //         alt="Illustration"
    //         className="img-fluid"
    //       /> */}
    //     {/* </Col> */}
    //   </Row>
    // </Container>
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        {/* Login form column */}
        <Col
          md={6}
          lg={5}
          xl={4}
          style={{ maxWidth: "500px", paddingLeft: "5rem",marginLeft:'auto' }}
          className="p-4"
        >
          <h2>Sign In</h2>
          <strong>
            New user?{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Create an account
            </a>
          </strong>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ border: "2px solid #000", borderRadius: 0 }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ border: "2px solid #000", borderRadius: 0 }}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Check
                type="checkbox"
                id="keepSignedIn"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                style={{ transform: "scale(1.5)", marginRight: "10px" }}
              />
              <Form.Label htmlFor="keepSignedIn" className="mb-0 fw-bold">
                Keep me signed in
              </Form.Label>
            </Form.Group>
            <Button
              type="submit"
              variant="dark"
              className="w-100"
              style={{ fontWeight: "bold", borderRadius: 0 }}
            >
              Sign In
            </Button>
          </Form>

          <div className="d-flex align-items-center my-3">
            <div
              style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}
            ></div>
            <div className="mx-2 fw-bold">Or Sign In With</div>
            <div
              style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}
            ></div>
          </div>

          <div className="d-flex justify-content-center gap-2">
            {["google", "facebook", "linkedin", "twitter"].map((icon, idx) => (
              <Button
                key={idx}
                variant="outline-dark"
                size="sm"
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px", padding: 0 }}
              >
                <i className={`bi bi-${icon}`}></i>
              </Button>
            ))}
          </div>
        </Col>

        {/* Image column */}
        {/* <Col className="d-none d-md-flex align-items-center justify-content-center"> */}
        {/* <Col md={6} className="d-flex justify-content-center align-items-center"> */}
        <Col md={6} className="d-none d-md-flex justify-content-center align-items-center">

          <img
            src={loginImg}
            alt=""
            // className="img-fluid d-block"
             className="d-block"
            // style={{ maxHeight: "400px", outline: "none" }}
                style={{ maxHeight: '500px', caretColor: 'transparent', userSelect: 'none',height:'400px' }}

          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
