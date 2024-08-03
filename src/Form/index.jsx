import React, { useState } from 'react'
import './index.css'

export default function SumForm() {
  const [sum, setSum] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = parseFloat(inputValue)
    if (!isNaN(value)) {
      setSum(sum + value)
      setInputValue('')
    }
  };

  return (
    <div>
      <p>Budget: {sum}</p>
      <form onSubmit={handleSubmit}>
        <input
        className='input-budget'
          type="number"
          value={inputValue}
          placeholder="adds an integer value"
          min="1"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add to budget</button>
      </form>
    </div>
  );
}