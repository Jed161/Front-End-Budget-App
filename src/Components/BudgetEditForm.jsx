import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

// if we need to edit something - we need the value it has curently;
// what kind of req do we need to make for that?

function BudgetEditForm() {
  // why are we grabbing index? we  need top grab a SPECIFIC bookmark

    let { index } = useParams();

    const [budget, setBudget] = useState({
        id: "",
        itemName: "",
        amount: "",
        date: "",
        from: "",
        category: "",
    });

    const navigate = useNavigate();
    const handleTextChange = (e) => {
      setBudget({...budget, [e.target.id]: e.target.value});
    };

    /*const handleCheckboxChange = () => {
        setBudget({...budget, amount: !budget.amount});
    };*/

    // once page loads WE NEED THE Budget to set our state with
    useEffect(() => {
        fetch(`${API}/budgets/${index}`)
            .then(res => res.json())
            .then(budget => {
            console.log(budget)
            setBudget(budget)
        })
        .catch(() => navigate("/not-found"))
    },  [index, navigate]);

    const updateBudget = () => {
        // our config for the fetch
        const httpOptions = {
          "method" : "PUT",
          "body" : JSON.stringify(budget),
          "headers" : {
          "Content-type" : "application/json"
          }
        }
    
          fetch(`${API}/budgets/${index}`, httpOptions)
            .then(() => { 
              alert(`${budget.itemName} has been updated!`);
              navigate(`/budgets/${index}`)
            })
            .catch((err) => console.error(err))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        updateBudget();
      };
      return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
            <label htmlFor="id">Id Number:</label>
            <input
              id="id"
              value={budget.id}
              type="number"
              onChange={ handleTextChange }
              placeholder="Number of id"
            />
            <label htmlFor="itemName">Name:</label>
            <input
              id="itemName"
              type="text"
              value={budget.itemName}
              placeholder="Name of item"
              onChange={handleTextChange}
            />
            <label htmlFor="amount">Amount:</label>
            <input
              id="amount"
              type="number"
              value={budget.amount}
              onChange={handleTextChange}
              placeholder="how much"
            />
            <label htmlFor="date">Date:</label>
            <input
              id="date"
              type="number"
              value={budget.date}
              onChange={handleTextChange}
              placeholder="Due date"
            />
            <label htmlFor="from">From</label>
            <input
            id="from"
            type="text"
            value={budget.from}
            onChange={handleTextChange}
            placeholder="name of credit card"
            />
            <label htmlFor="category">Category:</label>
            <input
              id="category"
              type="text"
              name="category"
              value={budget.category}
              placeholder="bill, personal expenses"
              onChange={handleTextChange}
            />
            <br />
    
            <input type="submit" />
          </form>
          <Link to={`/budgets/${index}`}>
            <button>Nevermind!</button>
          </Link>
        </div>
    );
}

export default BudgetEditForm;

