import React from "react";
import styled from "styled-components";
import MapImg from "../assets/images/map.jpg";
import PText from "./PText";

const MapStyles = styled.div`
	background: url(${MapImg}) no-repeat ;
	background-position: center;
	background-size: cover;
	min-height: 400px;
	opacity: 0.6;
	z-index: 0
}

  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
	z-index: 100;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>GEC circle, Irkutsk, Russian Federation</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Иркутск,+Иркутская+обл./@52.2983148,104.1971189,12z/data=!3m1!4b1!4m5!3m4!1s0x5da83ad353e2f665:0x31d6cd1456d8e94e!8m2!3d52.2854834!4d104.2890222"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
