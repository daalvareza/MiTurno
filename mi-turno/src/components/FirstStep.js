import { Button, InputAdornment, OutlinedInput, Radio } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@mui/system';
import { useEffect, useState } from 'react';
import theme from '../Modules/theme';
import offices from '../Modules/offices';

export default function FirstStep({ setPage, formData, setFormData }) {

  const ApiKey = "AIzaSyC1KMuI9FTePX9jxXC_w-yVU4JVx-Yk_SA";

  const [selectedOffice, setSelectedOffice] = useState(formData.officeSelected);
  const [selectedDirection, setSelectedDirection] = useState("droguerias+cruz+verde+Medellin");
  const [searchOffice, setSearchOffice] = useState();

  useEffect(() => {
    if (selectedOffice !== "") {
      let direction = offices.find(office => office.title === selectedOffice)?.direccion;
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
                      onChange={() => { setSelectedOffice(office.title); setFormData({...formData, officeSelected: office.title}) }}
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
                      onChange={() => { setSelectedOffice(office.title); setFormData({...formData, officeSelected: office.title})  }}
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
                <Button variant='contained' color='secondary' onClick={() => {if (formData.officeSelected !== "") {setPage(2)}}}>Seleccionar</Button>
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
