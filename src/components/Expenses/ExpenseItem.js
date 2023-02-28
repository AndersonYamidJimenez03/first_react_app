import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  //react hook
 /*  const [title, setTitle]= useState(props.title); */

/*   let title = props.title;
  const clickHandler = () => {
    console.log('clicked');
  }; */

 /*  const clickHandler = () => { */
    /* Assign space in memorey in react to save this variable, when we use useState (for one specific component instance)
     and tells react this JSX should be re-evaluated again*/
    /* setTitle('Updated!');
    console.log('updated');
  }  */

  return (
    /* This Card sends props like the others ones the only diference was that it wasn't dynamic. 
    In order to, take the className to use in the return div in   Card.js  */
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* // onClick (event listener) it's waiting for a function */}
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
