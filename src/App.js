import { useEffect, useState } from "react";

import { Main  } from './Components/Main';

function App() {
  const [ message, setMessage ] = useState('Hello There');

  function getMessage(){
    fetch('http://localhost:3000/')
    .then(r => r.ok? r.json() : console.log(r))
    .then(d => setMessage(d.message))
    .catch(e => console.log(e.message));
  }

  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      getMessage();
    },3000)

    return () => clearTimeout(messageTimeout);
  })

  return (
    <div 
      className
      ="text-2xl text-center font-mono bg-neutral-800 text-slate-300 h-screen space-y-4">
      <h1 className="text-4xl tracking-wider pb-5">{message}</h1>
      <Main />
    </div>
  );
}

export default App;
