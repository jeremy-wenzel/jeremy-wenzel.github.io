import MainBanner from "./MainBanner";
import IntroductionBanner from "./IntroductionBanner";
import ExperienceBanner from "./ExperienceBanner";
import Footer from "./Footer";
import './css/LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div>
        <div className="main-banner"><MainBanner /></div>
        <div className="intro-banner"><IntroductionBanner /></div>
        <div className='experience-banner'><ExperienceBanner /></div>
      </div>
      <div className='footer'><Footer /></div>
    </div>
  );
}