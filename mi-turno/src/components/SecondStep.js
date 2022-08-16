import { Button, MenuItem, OutlinedInput, Select } from '@mui/material'
import {ThemeProvider} from '@mui/system'
import React, { useEffect, useState } from 'react'
import theme from '../Theme/theme';

export default function SecondStep(props) {
    const [next, setNext] = useState(false);

  useEffect(() => {
      if (next === true) {
          props.setPage(3);
      }
  }, [next, props]);

  return (
    <div className='second-step'>
        <div className='data'>
            <div className='title'><strong>Ingresa tus datos y el tipo de servicio</strong></div>
                <div className='document-container'>
                    <Select
                        label="Tipo de Documento"
                        value="CC"
                        sx={{
                            borderBottom: "1px solid #979797 !important",
                            borderRadius: "0px",
                            width: "100%",
                            margin: "50px 0px 10px 0px",
                            height: "30px"
                        }}
                    >
                        <MenuItem value="CC">Cedula de Ciudadania</MenuItem>
                        <MenuItem value="TI">Tarjeta de Identidad</MenuItem>
                    </Select>
                    <OutlinedInput
                        type='text'
                        placeholder='Número de documento'
                        sx={{
                            borderBottom: "1px solid #979797 !important",
                            borderRadius: "0px",
                            width: "100%",
                            margin: "10px 0px 20px 0px",
                            height: "30px"
                        }}
                    />
                </div>
                <div className='name-container'>
                    <div className='name'>
                        <OutlinedInput
                            type='text'
                            placeholder='Primer Nombre'
                            sx={{
                                borderBottom: "1px solid #979797 !important",
                                borderRadius: "0px",
                                margin: "10px 0px 10px 0px",
                                height: "30px"
                            }}
                        />
                        <OutlinedInput
                            type='text'
                            placeholder='Segundo Nombre'
                            sx={{
                                borderBottom: "1px solid #979797 !important",
                                borderRadius: "0px",
                                margin: "10px 0px 10px 0px",
                                height: "30px"
                            }}
                        />
                    </div>
                    <div className='name'>
                        <OutlinedInput
                            type='text'
                            placeholder='Primer Apellido'
                            sx={{
                                borderBottom: "1px solid #979797 !important",
                                borderRadius: "0px",
                                margin: "10px 0px 10px 0px",
                                height: "30px"
                            }}
                        />
                        <OutlinedInput
                            type='text'
                            placeholder='Segundo Apellido'
                            sx={{
                                borderBottom: "1px solid #979797 !important",
                                borderRadius: "0px",
                                margin: "10px 0px 10px 0px",
                                height: "30px"
                            }}
                        />
                    </div>
                </div>
                <div className='document-container'>
                    <Select
                        label="Servicio"
                        value="Consulta Externa"
                        sx={{
                            borderBottom: "1px solid #979797 !important",
                            borderRadius: "0px",
                            width: "100%",
                            margin: "50px 0px 10px 0px",
                            height: "30px"
                        }}
                    >                    
                        <MenuItem value="Consulta Externa">Consulta Externa</MenuItem>
                        <MenuItem value="TI">Tarjeta de Identidad</MenuItem>
                    </Select>
                </div>
                <div className='office'>
                    <div className='office-info'>
                        <div className='office-title'>Sede 1</div>
                        <div className='office-direction'>Calle 1 # 87 - 78, Lorem Ipsum</div>
                        <div className='office-schedule'>Horario: Lorem Ipsum</div>
                    </div>
                </div>
                <div className='button-container button-container__select'>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained' color='secondary' onClick={() => {setNext(true)}}>Siguiente</Button>
                    </ThemeProvider>
                </div>
        </div>
        <div className='img-container'>
            <img className='img-data' src='Grupo 1376.png' alt='Mi Turno Data'></img>
        </div>        
    </div>
  )
}
