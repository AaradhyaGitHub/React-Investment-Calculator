export default function Results({ results, onHandleCalculation }) {
  return (
    <div>
        <button onClick={onHandleCalculation}>
            Calculate
        </button>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    </div>
  );
}
