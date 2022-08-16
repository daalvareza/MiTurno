import { Button, MenuItem, OutlinedInput, Select } from '@mui/material'
import {ThemeProvider} from '@mui/system'
import React from 'react'
import theme from '../Modules/theme';
import offices from '../Modules/offices';

export default function SecondStep({ setPage, formData, setFormData }) {

    const selectedOffice = offices.find(office => office.title === formData.officeSelected);

  return (
    <div className='second-step'>
        <div className='data'>
            <div className='title'><strong>Ingresa tus datos y el tipo de servicio</strong></div>
                <div className='document-container'>
                    <Select
                        label="Tipo de Documento"
                        value={formData.typeID}
                        onChange={(event) => {setFormData({...formData, typeID: event.target.value})}}
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
                        value={formData.numID}
                        onChange={(event) => {setFormData({...formData, numID: event.target.value})}}
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
                            value={formData.firstName}
                            onChange={(event) => {setFormData({...formData, firstName: event.target.value})}}
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
                            value={formData.secondName}
                            onChange={(event) => {setFormData({...formData, secondName: event.target.value})}}
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
                            value={formData.firstLastName}
                            onChange={(event) => {setFormData({...formData, firstLastName: event.target.value})}}
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
                            value={formData.secondLastName}
                            onChange={(event) => {setFormData({...formData, secondLastName: event.target.value})}}
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
                        value={formData.service}
                        onChange={(event) => {setFormData({...formData, service: event.target.value})}}
                        sx={{
                            borderBottom: "1px solid #979797 !important",
                            borderRadius: "0px",
                            width: "100%",
                            margin: "50px 0px 10px 0px",
                            height: "30px"
                        }}
                    >                    
                        <MenuItem value="Consulta Externa">Consulta Externa</MenuItem>
                        <MenuItem value="Otro">Otro</MenuItem>
                    </Select>
                </div>
                <div className='office'>
                    <div className='office-info'>
                        <div className='office-title'>{selectedOffice.title}</div>
                        <div className='office-direction'>{selectedOffice.direccion}</div>
                        <div className='office-schedule'>{selectedOffice.horario}</div>
                    </div>
                </div>
                <div className='button-container button-container__select'>
                    <ThemeProvider theme={theme}>
                        <Button variant='contained' color='secondary' onClick={() => {
                            if (formData.numID !== "" && formData.firstName !== ""
                             && formData.secondName !== "" && formData.firstLastName !== ""
                             && formData.secondLastName !== "") {
                                setPage(3)
                             }
                        }}>Siguiente</Button>
                    </ThemeProvider>
                </div>
        </div>
        <div className='img-container'>
            <img className='img-data' src='Grupo 1376.png' alt='Mi Turno Data'></img>
        </div>        
    </div>
  )
}
