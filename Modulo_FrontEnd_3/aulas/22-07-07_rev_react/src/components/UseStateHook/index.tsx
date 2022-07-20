import { useState } from 'react';

export default function UseStateHook() {
    const [valor, setValor] = useState('Teste');
    let valor2 = 10;
    const [nome, setNome] = useState('');

    function onMudarValor() {
        setValor('Outro valor');
        valor2 = 20;
    }
    return (
        <>
            <h2>useState</h2>
            { valor } - { valor2 }
            <button onClick={onMudarValor}>Alterar nome</button>
            <div>
                <input type="text" 
                       value={nome} 
                       onChange={ (event) => setNome(event.target.value) }/>
            </div>
        </>
    );
}