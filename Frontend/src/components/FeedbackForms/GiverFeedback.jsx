import React, { useState } from "react";
import './Feedback.css';

const initialState = {
  rating: "",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  comments: "",
};

const FeedbackForSeeker = () => {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.rating || !formData.q1 || !formData.q2 || !formData.q3 || !formData.q4) {
      alert("Please complete all required fields.");
      return;
    }
    console.log("Feedback Submitted (for Seeker):", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="feedback-thankyou">Thank you for your feedback!</div>;
  }

  const mcqQuestions = [
    {
      id: "q1",
      label: "How cooperative was the care seeker or their family?",
      options: ["Very cooperative", "Somewhat cooperative", "Neutral", "Uncooperative"],
    },
    {
      id: "q2",
      label: "Were the expectations from your caregiving role clearly communicated?",
      options: ["Very clear", "Mostly clear", "Unclear", "Very unclear"],
    },
    {
      id: "q3",
      label: "How respectful was the care seeker or their family towards you?",
      options: ["Always respectful", "Usually respectful", "Sometimes disrespectful", "Often disrespectful"],
    },
    {
      id: "q4",
      label: "How would you rate your overall caregiving experience with this seeker?",
      options: ["Excellent", "Good", "Fair", "Poor"],
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Care Seeker Feedback Form</h2>

      {/* Star Rating */}
      <div className="form-group">
        <label>
          How would you rate the care seeker overall? <span className="required">*</span>
        </label>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input
                type="radio"
                name="rating"
                value={num}
                checked={formData.rating === num.toString()}
                onChange={handleChange}
              />
              <span className="star">★</span>
            </label>
          ))}
        </div>
      </div>

      {/* MCQs */}
      {mcqQuestions.map((q) => (
        <div className="form-group mcq-question" key={q.id}>
          <label>{q.label} <span className="required">*</span></label>
          {q.options.map((option, idx) => (
            <div key={idx}>
              <label>
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  checked={formData[q.id] === option}
                  onChange={handleChange}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}

      {/* Optional Comments */}
      <div className="form-group">
        <label>Additional comments (optional):</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Write your feedback here..."
        />
      </div>

      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForSeeker;
