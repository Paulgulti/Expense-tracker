import React, { useContext } from 'react'
import { ContextProvider } from './Context'

const TotalBalance = () => {

    const { incomeTransaction, expenseTransaction } = useContext(ContextProvider)
    const totalBalance = incomeTransaction.map(itr => parseFloat(itr.amount))
        .reduce((acc, current) => { return acc + current }, 0) -
        expenseTransaction.map(itr => parseFloat(itr.amount))
            .reduce((acc, current) => { return acc + current }, 0)
    // console.log(totalBalance)
    return (
        <div>
            <h3>Total Balance is $ {totalBalance}</h3>
        </div>
    )
}

export default TotalBalance