import logo from "./assets/investment-calculator-logo.png"

function App() {
  return (
    <main>
      <header id="header">
        <img src={logo} alt="main-logo" />
        <h1>Investment Calculator</h1>
      </header>

      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input />
          </p>
          <p>
            <label>Initial Investment</label>
            <input />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input />
          </p>
          <p>
            <label>Initial Investment</label>
            <input />
          </p>
        </div>
      </section>



    </main>

  )
}

export default App
