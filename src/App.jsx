import logo from "./assets/investment-calculator-logo.png"

function App() {
  return (
    <main>
      <header id="header">
        <img src={logo} alt="main-logo" />
        <h1>Investment Calculator</h1>
      </header>

      <div id="user-input">
        <div className="user-input">
          <label id="user-input">
            <input id="user-input" type="text" required />
          </label>
          <label id="user-input">
            <input id="user-input" type="text" required />
          </label>

        </div>
        <div className="user-input">
          <label id="user-input">
            <input id="user-input" type="text" required />
          </label>
          <label id="user-input">
            <input id="user-input" type="text" required />
          </label>

        </div>
      </div>
      

    </main>

  )
}

export default App
