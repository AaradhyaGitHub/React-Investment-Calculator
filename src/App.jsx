import { useState } from "react";

import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";

import calculateInvestmentResults from "./util/investment.js";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <main>
      <Header />
      <UserInput userInputs={inputs} onHandleChange={handleChange} />
      <Results />
    </main>
  );
}

export default App;
