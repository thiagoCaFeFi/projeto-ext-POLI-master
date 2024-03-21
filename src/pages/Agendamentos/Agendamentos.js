import React, { useState } from 'react';
import './agen.css'
import Header2 from '../../components/header2'

function Agendamentos() {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, e.g., sending the selectedOption and selectedDate to a server
        console.log("Selected Option:", selectedOption);
        console.log("Selected Date:", selectedDate);
    };

    return (
        <div>
            <Header2/>
        <div className="container">
            
                
            
            <div className='header'>
                <h1>Agendamento</h1>
            </div>
            <form onSubmit={handleSubmit} className="form">
                <select value={selectedOption} onChange={handleOptionChange} className="select">
                    <option value="">Selecione o exame...</option>
                    <option value="Exame de Sangue">Exame de Sangue</option>
                    <option value="Raio-X">Raio-X</option>
                    <option value="Ultrassom">Ultrassom</option>
                    {/* Adicione mais opções conforme necessário */}
                </select>
                <input 
                    type="date" 
                    value={selectedDate} 
                    onChange={handleDateChange} 
                    className="date-input"
                />
                <button className='button' type="submit">Enviar</button>
            </form>
        </div></div>
    );
}

export default Agendamentos;
