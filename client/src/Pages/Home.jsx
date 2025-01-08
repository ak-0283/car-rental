import React, { useState, useEffect } from "react";
import Booking from "../components/Booking/Booking";
import "./home.css";
import Hero from "../components/Hero/Hero";
import Work from "../components/Working/Work";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <div className="hero">
        <Hero />
      </div>
      <div className="booking">
        <Booking />
      </div>
      <div className="working">
        <Work />
      </div>
      <Footer />

      {/* Scroll to Top Button */}
      <button
        id="scrollButton"
        onClick={scrollToTop}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <i className="fa-solid fa-arrow-up fa-lg"></i>
      </button>
    </main>
  );
};

export default Home;
