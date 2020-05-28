import React from 'react'
import Estado from './Estado';

const Modal = ({ onClose = () => {},onSave = () => {}, children }) => {

    return (
        <div className="modal">
            <div className="mod">
            <Estado/>
            <button onClick={onClose}>Sair</button>
            <div className='content'>{children}</div>
            </div>
        </div>
    );    

};

export default Modal;