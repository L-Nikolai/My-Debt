import React, {Component} from 'react';
import '../css/list-item.css';

export default class ListItem extends Component {
    
  render (){
  
    const {label, debt, onDelete} = this.props;

       return (
        <div className='list-item'>
            <span> {label} </span>
            <span> Debt  : {debt} &#x20bd;</span>
            <button
            onClick = {onDelete}/>
            
        </div>

      )
      

 }
}
