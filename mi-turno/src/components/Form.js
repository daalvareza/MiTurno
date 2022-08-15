/* eslint-disable default-case */
import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'
import FirstStep from './FirstStep';

export default function Form() {
    const [page, setPage] = useState(0);
    const pageDisplay = () => {
        if (page === 0) {
            return <Home page={page} setPage={setPage}/>
        } else if (page === 1) {
            return <FirstStep page={page} setPage={setPage}/>
        }
    }

  return (
    <>
        <Header/>
        {pageDisplay()}
        <footer className="footer">
            &copy; Github: .com
        </footer>
    </>
  )
}
