import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "./ContactForm";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    max-width: 500px;
    width: 100%;
  }
  .rigth {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .rigth {
      max-width: 100%;
    }
    .rigth {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle subheading="Get in touch" heading="Contact" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+79836931449" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="savamedvedevv@gmail.com"
            />
            <ContactInfoItem icon={<FaFacebookF />} text="Medvedev Savelii" />
            <ContactInfoItem text="Irkutsk, Russian Federation" />
          </div>
          <div className="rigth">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
