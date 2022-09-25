import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem=(props)=> {

     return(
        <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.price}</div>
            </div>
            {/* <button onClick={()=>{console.log('clicked!')}}>Change Title</button> this is used to change the title and in html inspect source console shows output clicked  */}
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
        </li>
    );
}

export default ExpenseItem;