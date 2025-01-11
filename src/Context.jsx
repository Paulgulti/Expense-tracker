import React, { createContext, useState } from 'react'

export const ContextProvider = createContext()

const Context = ({ children }) => {
    const [incomeTransaction, setIncomeTransaction] = useState([])
    const [expenseTransaction, setExpenseTransaction] = useState([])
    const [newTransactionDescription, setNewTransactionDescription] = useState("")
    const [newTransactionAmount, setNewTransactionAmount] = useState("")

    // console.log(transaction)

  return (
    <ContextProvider.Provider value={{  incomeTransaction, setIncomeTransaction, 
                                        newTransactionDescription, setNewTransactionDescription, 
                                        newTransactionAmount, setNewTransactionAmount,
                                        expenseTransaction, setExpenseTransaction}}>
      {children}
    </ContextProvider.Provider>
  )
}

export default Context