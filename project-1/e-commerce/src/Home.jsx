import React, { useState } from 'react'

import UserPage from '../Component/UserPage/UserPage'
import AdminPage from '../Component/AdminPage/AdminPage'
import AdminNav from '../Component/AdminPage/AdminNav'
import UserNav from '../Component/UserPage/UserNav'

function Home() {
  const [admin, setAdmin] = useState(false)
  return (
    <div>
       {admin? <AdminNav/>:<UserNav/>}
      { admin ? <AdminPage/>:<UserPage/>}
    </div>
  )
}

export default Home