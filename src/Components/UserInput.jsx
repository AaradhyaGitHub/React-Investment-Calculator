import { useState } from "react";

export default function UserInput({ inputs, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={inputs.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            name="annualInvestment"
            value={inputs.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            name="expectedReturn"
            value={inputs.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            name="duration"
            value={inputs.duration}
            onChange={handleChange}
          />
        </p>
      </div>
      {/*
      console.log(
        inputs.annualInvestment,
        inputs.initialInvestment,
        inputs.duration,
        inputs.expectedReturn
      )
        */}
    </section>
  );
}
