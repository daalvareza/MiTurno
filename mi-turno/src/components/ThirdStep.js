import React, { useState } from 'react'
import {Box, ThemeProvider} from '@mui/system'
import theme from '../Theme/theme';
import { Button, Modal } from '@mui/material';

export default function ThirdStep(props) {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        props.setPage(4);
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        props.setPage(3);
        setOpenModal(false);
    }

  return (
    <div className='third-step'>
        <div className='data'>
            <div className='title'><strong>Verifica tu información.</strong></div>
            <div className='user-name'>Alejandrin pinguin</div>
            <div className='user-lastname'>Mejía Yotengo</div>
            <div className='user-id'>C.c 1028798765</div>
            <div className='user-service'>Consulta externa</div>
            <div className='office'>
                <div className='office-info'>
                    <div className='office-title'>Sede 1</div>
                    <div className='office-direction'>Calle 1 # 87 - 78, Lorem Ipsum</div>
                    <div className='office-schedule'>Horario: Lorem Ipsum</div>
                </div>
            </div>
            <div className='button-container button-container__select'>
                <ThemeProvider theme={theme}>
                    <Button variant='contained' color='secondary' onClick={handleOpenModal}>Aceptar</Button>
                </ThemeProvider>
            </div>
        </div>
        <div className='img-container'>
            <img className='img-data' src='Grupo 2073.png' alt='Mi Turno Data'></img>
        </div>
        <Modal
            open={openModal}
            onClose={handleCloseModal}
        >
            <Box sx={{
                height: 500,
                width: 400,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: '#FFFFFF',
                borderRadius: "15px",
                boxShadow: "0px 3px 6px #00000029",
                pt: 2,
                px: 4,
                pb: 3,
            }}>
                <div className='modal'>
                    <img className='img-modal' src='Cruz verde.png' alt='Mi Turno Home'></img>
                    <div className='title'><strong>¡Has solicitado tu turno con éxito!</strong></div>
                    <div>Servicio:</div>
                    <div>Consulta externa</div>
                    <div>Día:</div>
                    <div>10-05-2021</div>
                    <div>Hora:</div>
                    <div>02:00pm</div>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained' color='modal' onClick={() => {}}>PDF</Button>
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained' color='modal' onClick={() => {}}>Solicitar nuevo turno</Button>
                    </ThemeProvider>
                </div>
            </Box>
        </Modal>
    </div>
  )
}
