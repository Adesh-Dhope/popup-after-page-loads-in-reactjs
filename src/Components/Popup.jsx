import React, { useState, useEffect } from "react";
import "./Popup.css";

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000); // Show popup after 4 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleClose = () => setShowPopup(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="popup-close" onClick={handleClose}>
              &times;
            </button>
            <h2>Subscribe to our Newsletter</h2>
            <p>Get the latest updates right in your inbox.</p>
            <form onSubmit={handleSubscribe} className="popup-form">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="popup-input"
              />
              <button type="submit" className="popup-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterPopup;
