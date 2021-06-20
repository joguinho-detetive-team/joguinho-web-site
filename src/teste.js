import { useState, useEffect } from "react";

export default function Teste() {
  const [count, setCount] = useState(0);

  const [mensagem, setMensagem] = useState([]);

  useEffect(() => {
    console.log('Renderizando')

    return () => {
      console.log('nao sei')
     }
  
  },[count])

  const click = () => {
    setCount(count + 1);

    setMensagem(`clicou ${count} vezes!`);

    alert(count);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={click}>Aperte aqui!</button>
      {[mensagem].map((msg) => (
        <p>{msg}</p>
      ))}
    </div>
  );
}
