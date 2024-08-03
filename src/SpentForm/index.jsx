import React, { useState } from 'react'
import './index.css'

export default function SpentForm({ spent, setSpent, inputValueSpent, setInputValueSpent }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = parseFloat(inputValueSpent)
    if (!isNaN(value)) {
      setSpent(spent + value)
      setInputValueSpent('')
    }
  };

  return (
    <>
      <p>Spent: {spent}</p>
      <form onSubmit={handleSubmit}>
        <input
          className='input-spent'
          type="number"
          value={inputValueSpent}
          placeholder="adds an integer value"
          min="1"
          onChange={(e) => setInputValueSpent(e.target.value)}
        />
        <button type="submit">Add to spent</button>
      </form>
    </>
  );
}