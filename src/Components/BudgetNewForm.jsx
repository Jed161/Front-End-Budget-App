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
        <div className="custom-form-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="id">Number:</label>
              <input
                id="id"
                className="form-control"
                value={budget.id}
                type="number"
                onChange={handleTextChange}
                placeholder="Number of id"
              />
            </div>
            <div className="form-group">
              <label htmlFor="itemName">Name:</label>
              <input
                id="itemName"
                className="form-control"
                type="text"
                value={budget.itemName}
                placeholder="Name of item"
                onChange={handleTextChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                id="amount"
                className="form-control"
                type="number"
                value={budget.amount}
                onChange={handleTextChange}
                placeholder="how much"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                id="date"
                className="form-control"
                type="number"
                value={budget.date}
                onChange={handleTextChange}
                placeholder="Due date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="from">From:</label>
              <input
                id="from"
                className="form-control"
                type="text"
                value={budget.from}
                onChange={handleTextChange}
                placeholder="name of credit card"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                className="form-control"
                name="category"
                value={budget.category}
                onChange={handleTextChange}
              >
                <option value="bill">Bill</option>
                <option value="personal">Personal Expenses</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      );
}
    
    


export default BudgetNewForm;