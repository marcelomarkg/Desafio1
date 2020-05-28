import React, { useState} from 'react';
import './App.css';
import Modal from './components/Modal';
import Estado from  './components/Estado';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="App-header">
      <h1>Documentos</h1> 
      <div className="Body">
          <h3>Inserir novo</h3>  
      <button onClick={() => setIsModalVisible(true)}>Iniciar Documento</button>
          {isModalVisible ? (
            <Modal onClose={() => setIsModalVisible(false)}>
           </Modal> 
           ) : null} 
    </div>
  </div>     
  );
  
}

export default App;
