import { useState } from "react";
import { FaBookOpen } from "react-icons/fa";

import axios from 'axios'
import Toast from "../Components/Toast";

export default function Login() {
    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')
    const [toastMessages, setToastMessages] = useState([])

    const login = (event) => {
        event.preventDefault()

        axios.get(`http://localhost:3001/login/${userName}/${userPass}`)
            .then(response => {
                const result = response.data

                console.log(result)

                if (response.status === 200) {
                    const user = result.result[0].user_rol

                    if (user === 'ADM') {
                        window.location = '/admin-dashboard'
                    }

                    if (user === 'BLB') {
                        window.location = '/librarian-dashboard'
                    }

                    if (user === 'ALU') {
                        window.location = '/student-dashboard'
                    }
                }
            })
            .catch(error => {
                if (error.response.data.result) {
                    const message = error.response?.data?.result || "Error al iniciar sesión"
                    addToastMessage({ type: 'error', text: message })
                }
            });
    }

    const addToastMessage = (newMessage) => {
        setToastMessages((prevMessages) => [...prevMessages, newMessage])

        setTimeout(() => {
            setToastMessages((prevMessages) => prevMessages.slice(1))
        }, 3000)
    }

    return (
        <>
            <div className="h-screen">
                <div className="toast">
                    {
                        toastMessages.map((message, index) => (
                            <Toast key={index} message={message.text} type={message.type} />
                        ))
                    }
                </div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <FaBookOpen size={50} className="mx-auto" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Biblioteca Universal
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Nombre de usuario</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        placeholder="Ingresa tu nombre de usuario"
                                        className="input input-bordered w-full block"
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        className="input input-bordered w-full block"
                                        placeholder="Ingresa tu contraseña"
                                        onChange={(e) => setUserPass(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full px-3 py-1.5 leading-6"
                                    onClick={(e) => login(e)}>
                                    Iniciar Sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}