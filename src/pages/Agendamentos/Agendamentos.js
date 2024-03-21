import React, { useState } from 'react';
import '../../components/agendamentos.css';
import './agen.css'

function Agendamentos() {
    const [inputText, setInputText] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, e.g., sending the inputText and selectedDate to a server
        console.log("Input Text:", inputText);
        console.log("Selected Date:", selectedDate);
    };

    return (
        
        <div className="container-esquerda">
            <div className='text'>
                <h1>Agendamento</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputText} 
                    onChange={handleInputChange} 
                    placeholder="nome do exame..." 
                />
                <input 
                    type="date" 
                    value={selectedDate} 
                    onChange={handleDateChange} 
                />
                <button className='buttom' type="submit">Enviar</button>
            </form>
        </div>
        
    );
}

export default Agendamentos;

