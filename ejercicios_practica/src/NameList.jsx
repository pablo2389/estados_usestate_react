// NameList.jsx
import React, { useState } from 'react';

function NameList() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddName = () => {
    if (inputValue.trim() !== '') {
      setNames([...names, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="name-list">
      <h2>Lista de Nombres</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingrese un nombre"
      />
      <button onClick={handleAddName}>Agregar</button>
    </div>
  );
}

export default NameList;
