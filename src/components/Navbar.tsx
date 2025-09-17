import  { useState } from 'react'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      {/* Main Navbar */}
      <nav className="mt-4 bg-gradient-to-r from-green-700/80 to-green-300 text-white shadow-md fixed z-50 w-4/5 mx-auto left-0 right-0 rounded-xl">
        <div className="flex justify-between h-16 items-center px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/Logo.svg" alt="Logo" className="h-10 w-auto" />
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <a href="#home" className="hover:text-gray-200 transition-colors">الرئيسية</a>
            <a href="#services" className="hover:text-gray-200 transition-colors">الخدمات</a>
            <a href="#about" className="hover:text-gray-200 transition-colors">عنّا</a>
            <a href="#download" className="hover:text-gray-200 transition-colors">تحميل</a>
            <a href="#howitworks" className="hover:text-gray-200 transition-colors">كيف يعمل</a>
          </div>
          
          {/* Login Button - Always Visible */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition-colors">
              حمل التطبيق            </button>
            
            {/* Mobile Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md hover:bg-green-600/30 transition-colors"
                aria-label="فتح القائمة"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: 'rgba(220, 252, 231, 0.3)' }}
          onClick={closeSidebar}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-green-700 to-green-500">
          <img src="/Logo.svg" alt="Logo" className="h-8 w-auto" />
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md text-white hover:bg-green-600/30 transition-colors"
            aria-label="إغلاق القائمة"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex flex-col p-4 space-y-4">
          <a 
            href="#home" 
            onClick={closeSidebar}
            className="text-gray-800 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-colors text-right"
          >
            الرئيسية
          </a>
          <a 
            href="#services" 
            onClick={closeSidebar}
            className="text-gray-800 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-colors text-right"
          >
            الخدمات
          </a>
          <a 
            href="#about" 
            onClick={closeSidebar}
            className="text-gray-800 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-colors text-right"
          >
            عنّا
          </a>
          <a 
            href="#download" 
            onClick={closeSidebar}
            className="text-gray-800 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-colors text-right"
          >
            تحميل
          </a>
          <a 
            href="#howitworks" 
            onClick={closeSidebar}
            className="text-gray-800 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-colors text-right"
          >
            كيف يعمل
          </a>
        </div>
      </div>
    </>
  )
}