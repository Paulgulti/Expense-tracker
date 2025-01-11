import React, { useContext } from 'react'
import { ContextProvider } from './Context'

const TransactionList = ({ transaction, title }) => {


    
    return (
        <div>
            <h3>{title}</h3>
            {transaction.map(tr =>
                <div key ={tr.id} className='transaction-list'>
                    <p className='transaction-description'>{tr.description}</p>
                    <p className='transaction-amount'>${tr.amount}</p>
                </div>
            )}
        </div>
    )
}

export default TransactionList
