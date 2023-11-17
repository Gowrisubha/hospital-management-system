import React from "react";
import { Link } from "react-router-dom";

export const analyze = (text) => {
  if (text.toString().includes('spicy food')) {
    return 'You might have an ulcer. Can I book you an appointment with a gastroenterologist?';
  } else if (text.toString().includes('within 5 km')) {
    // Return a Link component to navigate to the appointment page
    return (
      <Link to="/appointment">
        <h6>Click here to book your appointment</h6>
      </Link>
    );
  } else {
    return 'Sorry, I can\'t get you. Can you please rephrase your sentence?';
  }
}