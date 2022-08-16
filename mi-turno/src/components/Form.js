/* eslint-disable default-case */
import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

export default function Form() {
    const [page, setPage] = useState(0);

    const pageDisplay = () => {
        if (page === 0) {
            return <Home page={page} setPage={setPage}/>
        } else if (page === 1) {
            return <FirstStep page={page} setPage={setPage}/>
        } else if (page === 2) {
            return <SecondStep page={page} setPage={setPage}/>
        } else if (page >= 3) {
            return <ThirdStep page={page} setPage={setPage}/>
        }
    }

  return (
    <>
        <Header page={page} setPage={setPage}/>
        {pageDisplay()}
        <footer className="footer">
            &copy; Github: .com
        </footer>
    </>
  )
}
