import { Link } from "react-router-dom";

function Budget({ budget, index }) {
  return (
    <tr>
      <td>
        {<budget className="amount"></budget> ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <a>{budget.amount}
          {budget.itemName}
        </a>
      </td>
      <td>
        <Link to={`/budgets/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Budget;