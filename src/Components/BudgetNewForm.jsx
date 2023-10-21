import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL

function BudgetNewForm() {
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
    // e.target is the input FROM WHERE THIS IS FIRED

      setBudget({...budget, [e.target.id]: e.target.value});
    };

    /*const handleCheckboxChange = () => {
        setBudget({...budget, amount: !budget.amount});
    };*/

    const addBudget = () => {

    // What do we need to do to add a bookmark?
    // We need to create an options object to pass on

    const httpOptions = {
        "method" : "POST",
        "body" : JSON.stringify(bookmark),
        "headers" : {
          "Content-type" : "application/json"
        }
      }
      fetch(`${API}/budgets`, httpOptions)
        .then((res) => {
          console.log(res)
          alert(`${budget.name} was added to the database!`);
          navigate('/budgets');
        })
        .catch((err) => console.error(err))
        // we need to ADD a BODY to our POST to OPTIONS OBJECT holds the BOOKMARK in state
        // We need to send a POST request with fetch

    }

    const handleSubmit = (e) => {
        // this prevents the PAGE from RELOADING;
        e.preventDefault();
        addBookmark();
      };
      return (
        <div className="New">
          {/* this is what we DO when the form is submitted */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="id">Number:</label>
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
        </div>
      );
    
    
}

export default BudgetNewForm;