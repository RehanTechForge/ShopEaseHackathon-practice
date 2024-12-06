import React from "react";
import OurStory from "@/components/AboutPage/OurStory";
import OurTeamSection from "@/components/AboutPage/OurTeamSection";
import StatsSection from "@/components/AboutPage/StateSection";
import SupportSection from "@/components/AboutPage/SupportSection";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";

const AboutPage = () => {
  return (
    <section>
      <Breadcrumb />
      <OurStory />
      <StatsSection />
      <OurTeamSection />
      <SupportSection />
    </section>
  );
};

export default AboutPage;
