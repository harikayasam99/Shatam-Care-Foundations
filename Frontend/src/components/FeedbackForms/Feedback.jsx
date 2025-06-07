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

const Feedback = () => {
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
    console.log("Feedback Submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="feedback-thankyou">Thank you for your feedback!</div>;
  }

  const mcqQuestions = [
    {
      id: "q1",
      label: "How responsive was the caregiver to your needs?",
      options: ["Very responsive", "Somewhat responsive", "Neutral", "Unresponsive"],
    },
    {
      id: "q2",
      label: "How clear was the caregiver’s communication?",
      options: ["Very clear", "Clear", "Unclear", "Very unclear"],
    },
    {
      id: "q3",
      label: "Did the caregiver treat you with respect and empathy?",
      options: ["Always", "Often", "Sometimes", "Rarely"],
    },
    {
      id: "q4",
      label: "How satisfied are you with the overall support provided?",
      options: ["Very satisfied", "Satisfied", "Dissatisfied", "Very dissatisfied"],
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Caregiver Feedback Form</h2>

      {/* Star Rating */}
      <div className="form-group">
        <label>
          How would you rate the caregiver overall? <span className="required">*</span>
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
        <label>Additional Comments (Optional)</label>
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

export default Feedback;
