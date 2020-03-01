import React from 'react';
import Add from './Components/Add'
import TransactionList from './Components/TransactionList'
import Balance from './Components/Balance'

// https://medium.com/@dremiralles/build-a-budget-app-with-react-part-1-of-2-b3337f6222f0

// https://medium.com/@dremiralles/build-a-budget-app-with-react-part-2-of-2-afdb81d7f2be

// const Balance = (props) => {
//   var style = {
//     color: props.total > 0 ? 'green' : 'red'
//   };

//   return (
//     <div>
//       <h1>Balance</h1>
//       <p style={style}>${ props.total.toFixed(2) }</p>
//     </div>
//   )
// }

// var TransactionList = (props) => {

//   var txList = props.transaction.map( (transaction, idx) => (
//     <TransactionListEntry transaction={transaction} key={idx} />
//   ))

//   return (
//     <div>
//       <h1>Transactions</h1>
//       <div>
//         {txList}
//       </div>
//     </div>
//   )
// };

// class Add extends React.Component {

//   constructor(props) {
//   super(props);
//   this.state = {
//     description: 'Description',
//     amount: 'Amount'
//   }
//   this.add = this.add.bind(this);
//   this.handleChangeDesc = this.handleChangeDesc.bind(this);
//   this.handleChangeAmt = this.handleChangeAmt.bind(this);
// }

// handleChangeDesc(e) {
//   this.setState({
//     description: e.target.value
//   });
// }

// handleChangeAmt(e) {
//   this.setState({
//     amount: e.target.value
//   });
// }

// add() {
//   this.props.onAdd(this.state.description, this.state.amount)
// }

// render() {
//   return (
//     <div>
//       <input type="text" value={this.state.description} onChange={this.handleChangeDesc}/>
//       <input type="text" value={this.state.amount} onChange={this.handleChangeAmt}/>
//     </div>
//   )
// }
// }

var dataSet = [
  {amount: -10, description: 'Chipotle'},
  {amount: 1000, description: 'Paycheck'},
  {amount: -4.50, description: 'Coffee'},

]

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = dataSet;
    this.state.total = 0
  }

  componentWillMount() {
    this.setState({
      data: dataSet,
      total: dataSet.reduce( (a,b) => {
        return a+ b.amount;
      }, 0)
    });
};

add (description, amount) {
  // ajax POST request to server
}

render() {
  return (
  <div>
    <h1>My Budget</h1>
    <Add onAdd={this.add} />
    <TransactionList transactions={this.state.data} />
    <Balance total={this.state.total} />
  </div>
  );
}
};

// ReactDOM.render(<App />, document.getElementById('app'));