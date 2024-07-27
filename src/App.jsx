import Header from "./Components/Header.jsx"
import UserInput from "./Components/UserInput.jsx"
import Results from "./Components/Results.jsx"

import calculateInvestmentResults from "./util/investment.js"


function App() {
  return (
    <main>
      <Header />
      <UserInput />
      <Results />
    </main>
  )
}

export default App