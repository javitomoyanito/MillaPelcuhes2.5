import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';

export default function AdminLayout() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#fff9f4] text-[#3a2d28]">
      
      <AdminSidebar sideBarOpen={sideBar} setSideBarOpen={setSideBar} />

      <div className="flex-1 flex flex-col lg:ml-64">

        <header className="sticky top-0 z-30 bg-white shadow-md lg:hidden">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSideBar(true)} 
              className="text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <span className="font-bold text-lg">Millapeluche Admin</span>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <Outlet /> 
        </main>
      </div>

      {sideBar && (
        <div
          onClick={() => setSideBar(false)}
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
        ></div>
      )}
    </div>
  );
}