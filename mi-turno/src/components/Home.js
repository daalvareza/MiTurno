import React from 'react';
import theme from '../Modules/theme';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/system';

export default function Home({ setPage }) {
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
                <div>Ingresa tus datos y selecciona el servicio</div>
            </div>
            <div className='list-step'>
                <div className='number-circle'>3</div>
                <div>Verifica tu información</div>
            </div>
            <div className='button-container'>
                <ThemeProvider theme={theme}>
                    <Button variant='contained' color='secondary' onClick={() => {setPage(1)}}>Solicitar turno</Button>
                </ThemeProvider>
            </div>
        </div>
        <div className='home-right'>
            <img className='img-home' src='Grupo 2073.png' alt='Mi Turno Home'></img>
        </div>
    </div>
  )
}