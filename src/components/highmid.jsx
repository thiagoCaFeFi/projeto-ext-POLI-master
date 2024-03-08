import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../components/highmid.css';
import procape from '../assets/procape.png';

function Highmid() {
    
    function applyScrollReveal() {
        const revealConfig = {
            delay: 300,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-in-out',
            duration: 1000,
            reset: true
        };

        
        ScrollReveal().reveal('.textomid', revealConfig);
    }

    
    useEffect(function () {
        applyScrollReveal(); 
    }, []);

    return (
        <div className='highmid-container'>
            <div className='img-container'>
                {/* Imagem */}
                <img className='img' src={procape} alt="img" />
                
                {/* Container de texto */}
                <div className='text-container'>
                    <span className='textomid'>Transforme sua experiência de saúde.</span>
                    <span className='textomid'>Agendamentos fáceis,</span>
                    <span className='textomid'>resultados rápidos,</span>
                    <span className='textomid'>cuidado excepcional.</span>
                </div>
            </div>
        </div>
    );
}

export default Highmid;
