import React from 'react'

const TransactionList = ({ transaction, title }) => {


    
    return (
        <div>
            <h3>{title}</h3>
            {transaction.map((tr,index) =>
                <div key ={tr.id} className='transaction-list'>
                    <p className='transaction-description'>{index + 1} &nbsp; {tr.description}</p>
                    <p className='transaction-amount'>${tr.amount}</p>
                </div>
            )}
        </div>
    )
}

export default TransactionList
