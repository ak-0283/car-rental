import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What documents do I need to rent a car?",
      answer: "To rent a car, you'll need a valid driver's license, a credit card in the renter's name, and proof of insurance. International renters may need to provide a passport and international driving permit."
    },
    {
      question: "What is your fuel policy?",
      answer: "Our cars are provided with a full tank of fuel and should be returned with a full tank. If the car is returned with less fuel, you will be charged at premium rates for the missing fuel plus a service charge."
    },
    {
      question: "Are there any age restrictions?",
      answer: "Yes, renters must be at least 21 years old. Drivers under 25 may incur a young driver surcharge. Some luxury and specialty vehicles may require the driver to be 25 or older."
    },
    {
      question: "What is included in the rental price?",
      answer: "Our basic rental price includes unlimited mileage, basic insurance coverage, 24/7 roadside assistance, and standard vehicle maintenance. Additional insurance options and amenities are available for purchase."
    },
    {
      question: "How can I modify or cancel my reservation?",
      answer: "You can modify or cancel your reservation through your account on our website or by contacting our customer service team. Cancellations made at least 48 hours before pickup are free of charge."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-item"
          >
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div
              className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;