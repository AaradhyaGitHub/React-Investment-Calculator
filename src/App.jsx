import { useState, useEffect } from "react";

import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";

import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [results, setResults] = useState([]);

  const handleCalculation = () => {
    const calculatedResults = calculateInvestmentResults({
      initialInvestment: parseFloat(inputs.initialInvestment),
      annualInvestment: parseFloat(inputs.annualInvestment),
      expectedReturn: parseFloat(inputs.expectedReturn),
      duration: parseFloat(inputs.duration)
    });
    console.log(calculatedResults);
    console.log(results);
    setResults(calculatedResults);
  };
  useEffect(() => {
    if (
      inputs.initialInvestment &&
      inputs.annualInvestment &&
      inputs.expectedReturn &&
      inputs.duration
    ) {
      handleCalculation();
    }
  }, [inputs]);

  return (
    <main>
      <Header />
      <UserInput userInputs={inputs} onHandleChange={handleChange} />
      <Results results={results} />
    </main>
  );
}

export default App;
