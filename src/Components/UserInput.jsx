import { useState } from "react";

export default function UserInput({ userInputs, onHandleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={userInputs.initialInvestment}
            onChange={onHandleChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            name="annualInvestment"
            value={userInputs.annualInvestment}
            onChange={onHandleChange}
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
            value={userInputs.expectedReturn}
            onChange={onHandleChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            name="duration"
            value={userInputs.duration}
            onChange={onHandleChange}
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
