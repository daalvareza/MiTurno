import { Button, Step, StepLabel, Stepper } from '@mui/material'
import { Box } from '@mui/system'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'

export default function Header(props) {
  return (
    <>
    <div className='header'>
        <img className='logo' src='Cruz verde.png' alt='logo'></img>
    </div>
    {props.page !== 0 && (
      <div className='stepper-container'>
      <div className='back-button-container'>
        <Button 
          variant='text'
          sx={{
            justifyContent: "space-between",
            color: "#191919",
            width: "120px"
          }}
          onClick={() => {props.setPage(props.page-1)}}
        >
          <ArrowBackIcon/>
          <div>atrás</div>
        </Button>
      </div>
      <div className='stepper'>
        <Box>
          <Stepper activeStep={props.page - 1} alternativeLabel>
            <Step
             key={1}
             sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: '#1F9547', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#1F9547', // circle color (ACTIVE)
              },
             }}
            >
              <StepLabel>1</StepLabel>
            </Step>
            <Step 
              key={2}
              sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: '#1F9547', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#1F9547', // circle color (ACTIVE)
              },
             }}
            >
              <StepLabel>2</StepLabel>
            </Step>
            <Step 
              key={3}
              sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: '#1F9547', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#1F9547', // circle color (ACTIVE)
              },
             }}
            >
              <StepLabel>3</StepLabel>
            </Step>
          </Stepper>
        </Box>
      </div>
    </div>
    )}
    </>
  )
}
