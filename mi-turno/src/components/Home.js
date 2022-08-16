import React, { useEffect, useState } from 'react';
import theme from '../Theme/theme';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/system';

export default function Home(props) {

    const [next, setNext] = useState(false);

    useEffect(() => {
        if (next === true) {
            props.setPage(1);
        }
    }, [next, props]);

  return (
    <div className='home'>
        <div className='home-left'>
            <div className='title'><strong>Solicita tu turno virtual</strong></div>
            <div className='title'>y realiza todos tus trámites sin filas</div>
            <div className='sub-title'>Como solicitar un turno</div>
            <div className='list-step'>
                <div className='number-circle'>1</div>
                <div>Selecciona la oficina más cercana</div>
            </div>
            <div className='list-step'>
                <div className='number-circle'>2</div>
                <div>Ingresa tus datos</div>
            </div>   
            <div className='list-step'>
                <div className='number-circle'>3</div>
                <div>Selecciona el servicio</div>
            </div>   
            <div className='list-step'>
                <div className='number-circle'>4</div>
                <div>Verifica tu información</div>
            </div>
            <div className='button-container'>
                <ThemeProvider theme={theme}>
                    <Button variant='contained' color='secondary' onClick={() => {setNext(true)}}>Solicitar turno</Button>
                </ThemeProvider>
            </div>
        </div>
        <div className='home-right'>
            <img className='img-home' src='Grupo 2073.png' alt='Mi Turno Home'></img>
        </div>
    </div>
  )
}