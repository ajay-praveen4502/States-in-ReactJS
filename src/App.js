import React from 'react';
import './App.css';

// function App() {
//   const [isImportant,setIsImportant] = React.useState("Yes")
//   console.log(isImportant);
//   function handleClick(){
//     setIsImportant("No")
//   }
//   return (
//     <div className="state">
//       <h1 className='state--title'>Do I feel like going out tonight?</h1>
//       <div className='state--value' onClick={handleClick}><h1>{isImportant}</h1></div>

//     </div>
//   );
// }

function App() {
  const [IsGoingOut,setIsGoingOut] = React.useState("Yes")
  function changeMind(){
    setIsGoingOut(prevState => !prevState)
  }
  return (
    <div className="state">
      <h1 className='state--title'>Do I feel like going out tonight?</h1>
      <center><div className='state--value' onClick={changeMind}><h1>{IsGoingOut ? "Yes":"No"}</h1></div></center>

    </div>
  );
}


export default App;
