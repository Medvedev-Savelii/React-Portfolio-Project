import { MdDesktopMac, MdPhonelinkSetup } from "react-icons/md";
import { FaReact, FaNode } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServiceSectionItem from "./ServiceSectionItem";

const ServiceItemStyle = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServiceItemStyle>
      <div className="container">
        <SectionTitle subheading="what i will do for you" heading="SERVICES" />
        <div className="services__allItems">
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServiceSectionItem
            icon={<FaReact />}
            title="Frontend React.JS"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServiceSectionItem
            icon={<FaNode />}
            title="Backend Node.JS"
            desc="I will create a project architecture for you in Node.JS"
          />
        </div>
      </div>
    </ServiceItemStyle>
  );
}
