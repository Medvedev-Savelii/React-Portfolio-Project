import React from "react";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Sevastian Medvedev</span>
            </p>
            <h2 className="about__heading">
              A freelancer full-stack Node.js developer
            </h2>
            <div className="about__info">
              <PText>
                I am from chittagong, Bangladesh. A place of beauty and nature.
                Since my childhood, i love art and design. I always try to
                design stuff with my unique point of view. I also love to create
                things that can be usefull to others.
                <br /> <br />
                I started coding since I was in high school. Coding is also an
                art for me. I love it and now I have the opportunity to design
                along with the coding. I find it really interesting and I
                enjoyed the process a lot.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="sevastian img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="School" items={["Hight School 11"]} />
            <AboutInfoItem
              title="College"
              items={["Irkutsk aviation сollege "]}
            />
            <AboutInfoItem
              title="College"
              items={["Russian-Asian College of Economics and Law"]}
            />
            <AboutInfoItem
              title="Varsity"
              items={["Southwest jiaotong university"]}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="Frontend"
              items={["HTML", "CSS", "JavaScript", "React", "Vue.3"]}
            />
            <AboutInfoItem
              title="Backend"
              items={["Node.js", "Express", "Nest.js", "Python", "Django"]}
            />
            <AboutInfoItem
              title="Database"
              items={["SQL", "MySQL", "MongoDB", "PostgreSQL", "GraphQL"]}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">EXPERIENTCES</h1>
            <AboutInfoItem title="2013-2015" items={["system administrator"]} />
            <AboutInfoItem
              title="2016-2018"
              items={["Procurement logistics"]}
            />
            <AboutInfoItem
              title="2019-2021"
              items={["real estate appraiser"]}
            />
            <AboutInfoItem title="2021-" items={["UpWork Freelance"]} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
