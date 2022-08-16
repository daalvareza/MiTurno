import React, { useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import {Box, ThemeProvider} from '@mui/system'
import theme from '../Modules/theme';
import { Button, Modal } from '@mui/material';
import offices from '../Modules/offices';
import reactElementToJSXString from 'react-element-to-jsx-string';

export default function ThirdStep({ setPage, formData, setFormData }) {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setPage(4);
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setPage(3);
        setOpenModal(false);
    }

    const selectedOffice = offices.find(office => office.title === formData.officeSelected);

    const newForm = () => {
        setFormData({
            officeSelected: "",
            typeID: "CC",
            numID: "",
            firstName: "",
            secondName: "",
            firstLastName: "",
            secondLastName: "",
            service: "Consulta Externa"
        });
        setPage(0);
    };

    const getModal = (isPdf) => {
        return (
            <Modal
                open={openModal}
                onClose={handleCloseModal}
            >
                <Box sx={{
                    height: 'auto',
                    width: 400,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    textAlign: 'center',
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
                        <div className='title title__modal'><strong>¡Has solicitado tu turno con éxito!</strong></div>
                        <div className='key__modal'>Nombre:</div>
                        <div className='value__modal'>{formData.firstName} {formData.secondName}</div>
                        <div className='value__modal'>{formData.firstLastName} {formData.secondLastName}</div>
                        <div className='key__modal'>Documento:</div>
                        <div className='value__modal'>{formData.typeID}. {formData.numID}</div>
                        <div className='key__modal'>Sede:</div>
                        <div className='value__modal'>{formData.officeSelected}</div>
                        <div className='key__modal'>Servicio:</div>
                        <div className='value__modal'>{formData.service}</div>
                        <div className='key__modal'>Día:</div>
                        <div className='value__modal'>10-05-2021</div>
                        <div className='key__modal'>Hora:</div>
                        <div className='value__modal'>02:00pm</div>
                        {!isPdf && (
                            <div className='button-container__modal'>
                            <ThemeProvider theme={theme}>
                                <Button variant='contained' color='modal' onClick={() => {getPDF()}}>PDF</Button>
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                                <Button variant='contained' color='modal' onClick={() => {newForm()}}>Solicitar nuevo turno</Button>
                            </ThemeProvider>
                        </div>
                        )}
                    </div>
                </Box>
            </Modal>);
    };

    const getPDF = () => {
        const api_endpoint = "https://selectpdf.com/api2/convert/";
        const api_key = "401e2006-2a9c-4ac9-a78a-8f022f1ba436";
        
        // TODO this return an empty string, why?
        //const htmlString = renderToStaticMarkup(getModal(true));
        const htmlString = reactElementToJSXString(getModal(true));
    
        const params = {
            key: api_key, 
            html: htmlString
        }
    
        const xhr = new XMLHttpRequest();
        xhr.open('POST', api_endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.responseType = 'arraybuffer';
    
        xhr.onload = function (e) {
            if (this.status === 200) {    
                const blob = new Blob([this.response], { type: 'application/pdf' });
                const url = window.URL || window.webkitURL;
                const fileURL = url.createObjectURL(blob);
    
                const fileName = `Turno${formData.numID}.pdf`;
                const a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                a.href = fileURL;
                a.download = fileName;
                a.click();
            }
            else {
                alert("An error occurred during conversion to PDF.\nStatus code: " + this.status + ", Error: " + String.fromCharCode.apply(null, new Uint8Array(this.response)));
            }
        };    
        xhr.send(JSON.stringify(params));
    }

  return (
    <div className='third-step'>
        <div className='data'>
            <div className='title'><strong>Verifica tu información.</strong></div>
            <div className='user-name'>{formData.firstName} {formData.secondName}</div>
            <div className='user-lastname'>{formData.firstLastName} {formData.secondLastName}</div>
            <div className='user-id'>{formData.typeID}. {formData.numID}</div>
            <div className='user-service'>{formData.service}</div>
            <div className='office'>
                <div className='office-info'>
                    <div className='office-title'>{selectedOffice.title}</div>
                    <div className='office-direction'>{selectedOffice.direccion}</div>
                    <div className='office-schedule'>{selectedOffice.horario}</div>
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
        {getModal(false)}
    </div>
  )
}
