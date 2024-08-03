import React, { useState } from 'react'
import BudgetForm from './BudgetForm';
import SpentForm from './SpentForm';

export default function App() {

  const [budget, setBudget] = useState(0)
  const [inputValueBudget, setInputValueBudget] = useState('')
  const [spent, setSpent] = useState(0)
  const [inputValueSpent, setInputValueSpent] = useState('')

  return (
    <>
      <h1>Monthly Budget</h1>
      <BudgetForm 
        budget={budget}
        setBudget={setBudget}
        inputValueBudget={inputValueBudget}
        setInputValueBudget={setInputValueBudget}
      />
      {budget > 0 ? <SpentForm spent={spent} setSpent={setSpent} inputValueSpent={inputValueSpent} setInputValueSpent={setInputValueSpent} /> : null}
    </>
  )
}
