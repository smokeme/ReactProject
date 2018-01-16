import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      loadingModal: false,

      totalDebt: 0,
      totalInterest: 0,
      totalDuration: 10,
      totalPaid: 0,
      formamount: 0,
      forminterest: 0,
      formname: "noddddddddddne",
      formduration: 10,
      formalreadyPaid: 0,
      debt: {
        amount: 0,
        interest: 0,
        name: "nondddddddddddde",
        duration: 10,
        alreadyPaid: 0,
      }
    }
  }
  close = () => this.setState({ loadingModal: false })
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      debt: {
        amount: this.state.formamount,
        interest: this.state.forminterest,
        name: this.state.formname,
        duration: this.state.formduration,
        alreadyPaid: this.state.formalreadyPaid,

      }
    }, this.close)
  }
  render() {
    return (
  <div className="index-content">
    <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid ">
      <div className="navbar-header ">
        <a className="navbar-brand" href="#">Debt Calculator</a>
      </div>
    </div>
    </nav>
    <br/>
    <div className="container-fluid">
    <div className="row">
      <h1 className="page-header">Dashboard</h1>
      <div className="container">
        <div className="row mar-top-30">
          <div className="col-sm-4">
            <div className="box text-center contact-us-box">
              <div className="incon-box">
              <i className="fa fa-money" aria-hidden="true"></i>
              </div>
            <h3 className="box-tittle">Name of Debt</h3>
            <p className="box-text">Amount of Debt</p>
            <p className="box-text">Interest Rate</p>
            <p className="box-text">Interest Amount</p>
            <p className="box-text">Duration of Debt</p>
            <p className="box-text">Total Amount</p>
            </div>
          </div>
        <div className="col-sm-4">
          <div className="box text-center contact-us-box">
            <div className=" incon-box-disabled">
              <i className="fa fa-money" aria-hidden="true"></i>
            </div>
            <h3 className="box-tittle">Disabled Title</h3>
            <p className="box-text">Amount of Debt</p>
            <p className="box-text">Interest Rate</p>
            <p className="box-text">Interest Amount</p>
            <p className="box-text">Duration of Debt</p>
            <p className="box-text">Total Amount</p>
          </div>
        </div>
      </div>
      <h2 className="sub-header">Repayment Details</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Instalment Number</th>
              <th>Opening Balance</th>
              <th>Instalment Amount</th>
              <th>Closing Balance</th>
              <th>Number of Debts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>100</td>
              <td>50</td>
              <td>50</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>50</td>
              <td>50</td>
              <td>0</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Total Instalment Number</th>
              <th>Total Debt</th>
              <th>Total Interest Amount</th>
              <th>Total Paid</th>
              <th>Total Number of Debts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>80</td>
              <td>%25</td>
              <td>100</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
  </div>
    );
  }
}

export default App;
