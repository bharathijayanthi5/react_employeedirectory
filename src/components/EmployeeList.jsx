import React, { Component } from 'react';
import '../App.css';

const data = [{ name:'Bharathi Jayanthi', email:'bharathi@gurujada.org' },
              { name:'Josh', email:'josh@gurujada.org' },
              { name:'Sunil Varma', email:'sunil@gurujada.org' },
              { name:'Sravani', email:'sravani@gurujada.org' },
              { name:'Kiran Kumar', email:'kiran@gurujada.org' },
              { name:'Vishnu', email:'vishnu@gurujada.org' },
              { name:'Murali Mohan', email:'murali@gurujada.org' },
              { name:'Rama Krishna', email:'ramakrishna@gurujada.org' }
             ];

const EmployeeListItem = props =>
<div className="col-md-4 details">
  <h3>{props.name}</h3>
  <p>{props.email}</p>
</div>;

class EmployeeList extends React.Component{
 constructor(){
   super();
   this.state={value: 1};
   this._addByValue= this._addByValue.bind(this);
  this.state={
    search: ''
  };
 }
 updateSearch(event){
   this.setState({search: event.target.value.substr(0,20)});
 }
  _addByValue(){
   this.setState({
     value: this.state.value + 1
   });
 }

  render(){
let filteredEmployees = data.filter(
  (info) => {
    return info.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
  }
);
    return(
      <div>
        <p className="search"><input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} /></p>
      {filteredEmployees.map(info =>
        <EmployeeListItem key={info.id} {...info} />
          )}
          {this.state.value}
        <button onClick={this._addByValue}>like Me</button>

      </div>

    );
  }
}

export default EmployeeList;
