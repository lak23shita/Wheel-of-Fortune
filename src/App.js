import React from 'react';
import './App.css';
import Vector1 from './Images/vector1.svg';
import Vector from './Images/vector.svg';
class App extends React.Component{
  render(){
    return(
      <div className="whole-part">
        <div className="top-part">
            <img src={Vector} alt="arrow" />
            <h1>Your rewards</h1>
        </div>
        <div className="circle">
        <ul className="circle1">
        {/* <img src={Vector} className="bk" alt="imag1"/> */}
          <li>
            <div className="text" contenteditable="true" spellCheck="false">
            Better luck<br/>
            next time!
            </div>
            
          </li>
         
          <li>
            <div className="text" contenteditable="true" spellCheck="false">
            2X<br />
            Savings
            </div>

          </li>
          
          <li>
            <div className="text" contenteditable="true" spellCheck="false">
            ₹100<br />
            Cashback
            </div>

          </li>
          
          <li>
            <div className="text" contenteditable="true" spellCheck="false">
            ₹20 💸
            </div>

          </li>
          
          <li>
            <div className="text" contenteditable="true" spellCheck="false">
            ₹50 💸
            </div>

          </li>
          
          <li>
            <div className="text" contenteditable="true" spellCheck="false">
            1.5X<br />
            Savings
            </div>

          </li>
          
          <li>
            <div className="text" contenteditable="true" spellCheck="false">
            2X<br />
            Savings
            </div>

          </li>
          
          <li>
            <div className="text" contenteditable="true" spellCheck="false">
            ₹50 💸
            </div>

          </li>
      </ul>      
      </div>
   </div>
    )
  }
}

export default App;
