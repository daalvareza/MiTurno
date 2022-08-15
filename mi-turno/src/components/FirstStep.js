import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Radio, Stepper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@mui/system';
import { useEffect, useState } from 'react';
import theme from '../Theme/theme';

export default function FirstStep(props) {

  const ApiKey = "AIzaSyC1KMuI9FTePX9jxXC_w-yVU4JVx-Yk_SA";

  const offices = [
    {
      "id" : 1,
      "title" : "El Tesoro",
      "direccion" : "Centro Comercial El Tesoro, Medellín",
      "horario" : "Horario: 07:30-21:00"
    },
    {
      "id" : 2,
      "title" : "Oviedo",
      "direccion" : "Centro Comercial Oviedo, Medellín",
      "horario" : "Horario: 07:30-21:00"
    },
    {
      "id" : 3,
      "title" : "Santafé",
      "direccion" : "Centro Comercial Santafé, Medellín",
      "horario" : "Horario: 07:30-21:00"
    },
    {
      "id" : 4,
      "title" : "San Lucas",
      "direccion" : "Mall de San Lucas, Medellín",
      "horario" : "Horario: 07:30-21:00"
    },
    {
      "id" : 5,
      "title" : "Viva Envigado",
      "direccion" : "Viva Envigado",
      "horario" : "Horario: 07:30-21:00"
    },
    {
      "id" : 6,
      "title" : "City Plaza",
      "direccion" : "Centro Comercial City Plaza, Envigado",
      "horario" : "Horario: 07:30-21:00"
    },
    {
      "id" : 7,
      "title" : "San Diego",
      "direccion" : "Centro Comercial San Diego",
      "horario" : "Horario: 07:30-21:00"
    },
    {
      "id" : 8,
      "title" : "Mall Laureles",
      "direccion" : "Mall Laureles",
      "horario" : "Horario: 07:30-21:00"
    },
    {
      "id" : 9,
      "title" : "Bulevar de la 70",
      "direccion" : "Bulevar la 70",
      "horario" : "Horario: 07:30-21:00"
    },
  ];

  const [selectedOffice, setSelectedOffice] = useState();
  const [selectedDirection, setSelectedDirection] = useState("droguerias+cruz+verde+Medellin");
  const [searchOffice, setSearchOffice] = useState();

  const [next, setNext] = useState(false);

  useEffect(() => {
      if (next === true) {
          props.setPage(2);
      }
  }, [next, props]);

  useEffect(() => {
    if (selectedOffice !== undefined) {
      let direction = offices.find(office => office.title === selectedOffice).direccion;
      direction = encodeURIComponent(`cruz verde ${direction}`);
      setSelectedDirection(direction);
    }
  }, [selectedOffice]);

  return (
    <div className='first-step'>
      <div className='select-office-container'>
        <div className='title'><strong>Selecciona la oficina más cercana</strong></div>
        <div className='search-office'>
          <ThemeProvider theme={theme}>
            <OutlinedInput
              type='text'
              placeholder='Búsqueda'
              onChange={(event) => {setSearchOffice(event.target.value)}}
              sx={{
                color: 'search',
                borderRadius: '23px',
                backgroundColor: '#EFEFEF',
                height: '25px',
                padding: '0px 20px 0px 20px'
              }}
              endAdornment={
                <InputAdornment position='end'>
                  <SearchIcon/>
                </InputAdornment>
              }
            />
          </ThemeProvider>
        </div>
        <div className='select-office'>
          { searchOffice === undefined ?
              offices.map((office) => {
              return (
                <div className='office' key={office.id}>
                  <div className='radio-button-container'>
                    <Radio checked={selectedOffice === office.title}
                      onChange={() => { setSelectedOffice(office.title) }}
                      value={office.title}
                      name="office"
                      inputProps={{ 'aria-label': office.title }}/>
                  </div>
                  <div className='office-info'>
                    <div className='office-title'>{office.title}</div>
                    <div className='office-direction'>{office.direccion}</div>
                    <div className='office-schedule'>{office.horario}</div>
                  </div>
                </div>
              )
            }) :
            offices.filter(office => {return office.title.toLowerCase().includes(searchOffice.toLowerCase())}).map((office) => {
              return (
                <div className='office' key={office.id}>
                  <div className='radio-button-container'>
                    <Radio checked={selectedOffice === office.title}
                      onChange={() => { setSelectedOffice(office.title) }}
                      value={office.title}
                      name="office"
                      inputProps={{ 'aria-label': office.title }}/>
                  </div>
                  <div className='office-info'>
                    <div className='office-title'>{office.title}</div>
                    <div className='office-direction'>{office.direccion}</div>
                    <div className='office-schedule'>{office.horario}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='button-container button-container__select'>
            <ThemeProvider theme={theme}>
                <Button variant='contained' color='secondary' onClick={() => {setNext(true)}}>Seleccionar</Button>
            </ThemeProvider>
        </div>
      </div>
      <div className='office-map'>
        <iframe
          title='map'
          frameBorder="0"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/search?key=${ApiKey}&q=${selectedDirection}&zoom=13`}>
        </iframe>
      </div>
    </div>
  )
}
