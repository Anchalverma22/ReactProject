// import React, { useRef, useState } from "react";

// const Hook= () => {
//   const [str, setStr] = useState("JavaScript");
//   const [upper, setUpper] = useState(0);

//   const initial = useRef(str);

//   const handleUpper = () => {
//     setUpper((prev) => {
//       return (prev + 1)%3;
//     });
//     if (upper === 0) {
//       return setStr(initial.current.toUpperCase());
//     } else if (upper === 1) {
//       return setStr(initial.current.toLowerCase());
//     } else {
//       return setStr(initial.current);
//     }
//   };

//   return (
//     <div>
//       <p>{initial.current}</p>
//       <p>{str}</p>
//       <button onClick={handleUpper}>Click</button>
//     </div>
//   );
// };

// export default Hook;


// counter using useState//
// import { useState } from 'react';
// export default function Counter() {
//     const [count, setCount] = useState(0);
//     const [count1, setCount1] = useState(0);

//     function handleClick() {
//         setCount(count + 1);
//         setCount1(count1 - 1);
//     }
    
//     return (
//         <button onClick={handleClick}>
//             Click {count} me
//         </button>
//     );
 


// // managing from input using useState//
// import React, { useState } from 'react';

// function Form() {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = () => {
//         setSubmitted(true);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//             />
//             <input
//                 type="number"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 placeholder="Enter your age"
//             />
//             <button onClick={handleSubmit}>Submit</button>
//             {submitted && <p>Form Submitted!</p>}
//         </div>
//     );
// }

// export default Form;