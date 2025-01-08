// LearnMore.jsx
import React from 'react';
import {
  Clock,
  Car,
  MapPin,
  CreditCard,
  Search,
  Calendar,
  Key,
  ThumbsUp,
} from "lucide-react";
import './LearnMore.css';
import Footer from '../components/Footer/Footer';
import {useNavigate} from 'react-router-dom';

const LearnMore = () => {
    const navigate = useNavigate();
  const features = [
    {
      icon: <CreditCard />,
      title: "Affordable Pricing",
      description: "Competitive rates with no hidden fees. Get the best value for your money."
    },
    {
      icon: <MapPin />,
      title: "Flexible Locations",
      description: "Multiple pickup and drop-off points across the city for your convenience."
    },
    {
      icon: <Car />,
      title: "Diverse Fleet",
      description: "Choose from our wide range of vehicles including luxury, economy, and SUVs."
    },
    {
      icon: <Clock />,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you anytime, anywhere."
    }
  ];

  const steps = [
    {
      icon: <Search />,
      title: "Search & Compare",
      description: "Browse our collection and compare different vehicles."
    },
    {
      icon: <Calendar />,
      title: "Select Dates",
      description: "Choose your pickup and return dates."
    },
    {
      icon: <Key />,
      title: "Quick Booking",
      description: "Easy and secure booking process."
    },
    {
      icon: <ThumbsUp />,
      title: "Start Driving",
      description: "Pick up your car and enjoy your journey."
    }
  ];

  return (
    <>
    <div className="learn-more-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Experience Premium Car Rental Service</h1>
          <p>Your journey begins with us - Comfortable, Reliable, and Affordable</p>
          <div className="hero-buttons">
            <button className="btn-primary"onClick={() => navigate("/models")}>View Our Fleet</button>
            <button className="btn-secondary">Learn More</button>
          </div>
          <img 
            src="https://247wallst.com/wp-content/uploads/2019/11/michael-fux-car-collection.jpg" 
            alt="Luxury car collection"
            className="hero-image" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2>How It Works</h2>
        <div className="process-container">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Hit the Road?</h2>
          <p>Get started with our easy booking process</p>
          <button className="btn-primary">Book a Ride Now</button>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default LearnMore;