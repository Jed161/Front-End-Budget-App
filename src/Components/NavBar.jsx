import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
        <h1 className="d-inline-block font-weight-bold">Budget</h1>
      </div>
      <button className="btn btn-primary">
        <Link to="/budgets/new" className="text-white">New Budget</Link>
      </button>
    </nav>
  );
}
