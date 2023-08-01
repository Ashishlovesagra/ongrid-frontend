import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import { AuthProvider } from './ContextApi/Auth.jsx'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
    {/* <ToastContainer/> */}
    <Toaster/>
    <App />
    </AuthProvider>,
)
