import React, { useContext, useState } from 'react'
import { ContextProvider } from './Context'
import TransactionList from './TransactionList'
import TotalTransaction from './TotalTransaction'
import TotalBalance from './TotalBalance'

const Home = () => {
    
    const { incomeTransaction, expenseTransaction } = useContext(ContextProvider)
    // console.log(transaction)

    return (
        <div>
            <div className='totalbalance-view'>
                <TotalBalance/>
                <TotalTransaction transactionAmounts={incomeTransaction} description="Total Income"/>
                <TotalTransaction transactionAmounts={expenseTransaction} description="Total Expense"/>
            </div>
            <div className='alltransaction-view'>
                <div className='all-income'>
                    <TransactionList transaction={incomeTransaction} title="Income"/>
                </div>
                <div className='all-income'>
                    <TransactionList transaction={expenseTransaction} title="Expense"/>
                </div>
            </div>
        </div>

    )
}

export default Home
