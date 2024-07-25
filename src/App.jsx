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

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>r1 c1</td>
            <td>r1 c2</td>
            <td>r1 c3</td>
            <td>r1 c4</td>
            <td>r1 c5</td>
            <td>r1 c6</td>
          </tr>
          <tr>
            <td>r2 c1</td>
            <td>r2 c2</td>
            <td>r2 c3</td>
            <td>r2 c4</td>
            <td>r2 c5</td>
            <td>r2 c6</td>

          </tr>
        </tbody>
      </table>






    </main>


  )
}

export default App
