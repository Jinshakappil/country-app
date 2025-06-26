// export default HomePage;
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import Slider from "../slider/slider";
import { fetchCountries, filterByRegion, loadMore } from "../country/country";
// import yourFrameImg from "../assets/home-page-pic-1.PNG";
// import img from "../assets/home-page-pic-2.PNG";

interface Country {
  name: string;
  region: string;
  flag: string;
}

const regions = ["All", "Asia", "Europe"];

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  //   const { filtered, loading, page } = useSelector((state: RootState) => state.countries);
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const {
    filtered = [],
    loading = false,
    page = 1,
  } = useSelector((state: RootState) => state.countries || {});

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleRegionSelect = (region: string) => {
    setActiveRegion(region);
    dispatch(filterByRegion(region));
  };

  const visibleCountries: Country[] = filtered.slice(0, page * 12);

  return (
    <Container className="py-4">
      {/* Top header */}
      <Row className="align-items-center mb-3">
        <Col xs={6}>
          <h5 className="m-0">Countries</h5>
        </Col>
        <Col xs={6} className="text-end">
          {regions.map((region) => (
            <span
              key={region}
              onClick={() => handleRegionSelect(region)}
              style={{
                cursor: "pointer",
                fontWeight: activeRegion === region ? "bold" : "normal",
                borderBottom:
                  activeRegion === region ? "2px solid black" : "none",
                marginLeft: "10px",
              }}
            >
              {region}
            </span>
          ))}
        </Col>
      </Row>

      {/* Welcome heading */}
      <Row className="align-items-center mb-4">
        <Col>
          <div
            style={{
              height: "2px",
              backgroundColor: "#444",
              marginBottom: "15px",
            }}
          ></div>
        </Col>
        <Col xs="auto">
          <h2 className="m-0">WELCOME</h2>
        </Col>
        <Col>
          <div
            style={{
              height: "2px",
              backgroundColor: "#444",
              marginTop: "26px",
            }}
          ></div>
        </Col>
      </Row>

      {/* Slider + frame */}
      <Row className="mb-4">
        {/* <Col md={8}>
          <Slider />
        </Col> */}
        {/* <Col md={8} className="position-relative">
          <img
            src={yourFrameImg}
            alt="Frame"
            style={{ width: "75%", height: "auto" }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ padding: "1rem", marginTop: "8rem", marginRight: "13rem" }}
          >
            <Slider />
          </div>
          <img
            src={img}
            alt="Frame"
            style={{ width: "20%", marginLeft: "20px", height: "300px" }}
          />
        </Col> */}
        <Col md={8} className="position-relative">
          {/* <div className="d-flex align-items-center"> */}
            {/* <img
              src={yourFrameImg}
              alt="Frame"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src={img}
              alt="Frame"
              style={{ width: "20%", marginLeft: "20px", height: "300px" }}
            /> */}
          {/* </div> */}

          {/* <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ padding: "1rem", marginTop: "8rem", marginRight: "13rem" }}
          > */}
            <Slider />
          {/* </div> */}
        </Col>
      </Row>

      {/* Country grid */}
      <Row className="g-3">
        {visibleCountries.map((country, idx) => (
          <Col xs={12} md={6} key={idx}>
            <Card className="p-2 border border-2">
              <Row className="align-items-center">
                <Col xs={3}>
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col xs={9}>
                  <h5 className="mb-1">{country.name}</h5>
                  <p className="mb-0 text-muted">{country.region}</p>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleCountries.length < filtered.length && (
        <div className="text-center mt-4">
          <Button variant="dark" onClick={() => dispatch(loadMore())}>
            Load more
          </Button>
        </div>
      )}

      {loading && <p className="text-center mt-3">Loading...</p>}
      {/* Footer */}
      <footer className="mt-5 text-center">
        <div className="d-flex justify-content-center gap-3 mb-2">
          {["facebook", "twitter", "linkedin", "youtube"].map((icon) => (
            <div
              key={icon}
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className={`bi bi-${icon}`} style={{ fontSize: "1.2rem" }}></i>
            </div>
          ))}
        </div>
        <div className="fw-bold">Example@email.com</div>
        <div className="fw-bold">
          Copyright © 2020 Name. All rights reserved.
        </div>
      </footer>
    </Container>
  );
};

export default HomePage;
