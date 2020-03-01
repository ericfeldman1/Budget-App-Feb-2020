import React from 'react';


export default class TransactionList extends React.Component {

var TransactionList = (props) => {

  var txList = props.transaction.map( (transaction, idx) => (
    <TransactionListEntry transaction={transaction} key={idx} />
  ))

  return (
    <div>
      <h1>Transactions</h1>
      <div>
        {txList}
      </div>
    </div>
  )
};

}