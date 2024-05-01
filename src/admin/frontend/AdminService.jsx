import React from 'react'
import AdminNav from '../../component/adminHome/adminNav'

const AdminService = () => {
  return (
    <main className="flex gap-10 align-middle  bg-[#0D5077]  py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 mr-10 bg-gray-300 rounded-lg"> Service</div>
    </main>
  )
}

export default AdminService
