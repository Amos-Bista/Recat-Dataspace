import React from 'react'
import AdminAddForm from '../../component/adminAdd/adminAddform.jsx'
import AdminNav from '../../component/adminHome/adminNav'

const AdminAdd = () => {
  return (
      <main className="flex w-full align-middle bg-gray-200 py-28">
          <AdminNav/>
          <div className="w-full bg-gray-200 rounded-lg mr-14">
              <AdminAddForm/>
          </div>
    </main>
  )
}

export default AdminAdd