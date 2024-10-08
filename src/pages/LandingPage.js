import React from 'react';
import { Redirect } from 'react-router-dom';

import { Helmet } from '@openimis/fe-core';
import AboutTheProgram from '../components/AboutTheProgram';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowToApplySection from '../components/HowToApplySection';
import Navbar from '../components/Navbar';
import ProgramSummary from '../components/ProgramSummary';
import SiteBanner from '../components/SiteBanner';

/**
 * @name LandingPage
 * @param {boolean} props.isAuthenticated
 * @param {string} props.logo
 *
 * @returns {React.Component}
 *
 * @description
 * This is the Landing Page designed for the OpenIMIS Moldova project.
 * It it available on the `/front` route if the user is not authenticated
 * and the public page ("App.enablePublicPage") is enabled.
 */

function LandingPage({ isAuthenticated, logo }) {
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <Helmet title="Landing Page" />
      <SiteBanner />
      <Navbar logo={logo} />
      <HeroSection />
      <AboutTheProgram />
      <HowToApplySection />
      <FAQSection />
      <ProgramSummary />
      <Footer logo={logo} />
    </>
  );
}

export default LandingPage;
