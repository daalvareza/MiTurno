/* eslint-disable default-case */
import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

export default function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        officeSelected: "",
        typeID: "CC",
        numID: "",
        firstName: "",
        secondName: "",
        firstLastName: "",
        secondLastName: "",
        service: "Consulta Externa"
    });

    const pageDisplay = () => {
        if (page === 0) {
            return <Home setPage={setPage}/>
        } else if (page === 1) {
            return <FirstStep setPage={setPage} formData={formData} setFormData={setFormData}/>
        } else if (page === 2) {
            return <SecondStep setPage={setPage} formData={formData} setFormData={setFormData}/>
        } else if (page >= 3) {
            return <ThirdStep setPage={setPage} formData={formData} setFormData={setFormData}/>
        }
    }

  return (
    <>
        <Header page={page} setPage={setPage}/>
        {pageDisplay()}
        <footer className="footer">
            &copy; https://github.com/daalvareza/MiTurno
        </footer>
    </>
  )
}
