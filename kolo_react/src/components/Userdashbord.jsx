import React from 'react'
import Usernav from './Usernav'
import { Route, Routes } from 'react-router-dom'
import Userhome from './Userhome'
import Usergroups from './Usergroups'
import Userfundwallet from './Userfundwallet'

const Userdashbord = () => {
  return (
    <section className='d-flex  justify-content-between thescreen'>
        <Usernav/>
        <Routes>
            <Route path='' element={<Userhome/>}></Route>
            <Route path='groups' element={<Usergroups/>}></Route>
            <Route path='fundwallet' element={<Userfundwallet/>}></Route>
        </Routes>
    </section>
  )
}

export default Userdashbord