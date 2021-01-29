import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';

// function App() {
//   const name ='react';
//   const style = {
//     backgroundColor : 'black',
//     color:'aqua',
//     fontSize : 24,
//     padding : '1rem'
//   }
//   return (
//     <div>
//       <Hello />
//       <div style={style}>{name}</div>
//       <div className="gray-box"></div>
//     </div>
//   );

  
// }

// function App() {
//   return (
//     <Wrapper>
//     <Hello name="react" color="red"/>
//     <Hello color="pink"/>
//     </Wrapper>
//   );
// }

// function App() {
//   return (
//     <Wrapper>
//       <Hello name="react" color="red" isSpecial={true}/>
//       <Hello color="pink" />
//     </Wrapper>
//   )
// }

function App() {
  return (
    <Counter />
  );
}



export default App;
