import { Link } from "react-router-dom";

export default function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="navbar-brand">
              <Link to="/budgets">Budget</Link>
          </h1>
          <button className="btn btn-primary">
              <Link to="/budgets/new">New Budget</Link>
          </button>
      </nav>
  );
}