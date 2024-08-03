import './index.css'

export default function BudgetForm({ budget, setBudget, inputValueBudget, setInputValueBudget }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = parseFloat(inputValueBudget)
    if (!isNaN(value)) {
      setBudget(budget + value)
      setInputValueBudget('')
    }
  };

  return (
    <>
      <p>Budget: {budget}</p>
      <form onSubmit={handleSubmit}>
        <input
          className='input-budget'
          type="number"
          value={inputValueBudget}
          placeholder="adds an integer value"
          min="1"
          onChange={(e) => setInputValueBudget(e.target.value)}
        />
        <button type="submit">Add to budget</button>
      </form>
    </>
  );
}