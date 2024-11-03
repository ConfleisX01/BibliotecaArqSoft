import { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";

import axios from 'axios'
import { toast } from 'react-toastify'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')
    const [toastData, setToastData] = useState({})

    useEffect(() => {
        showMessage(toastData)
    }, [toastData])

    const showMessage = (data) => {
        if (data.type === 'success') {
            toast.success(data.message)
        } else if (data.type === 'error') {
            toast.error(data.message)
        } else if (data.type === 'warning') {
            toast.warning(data.message)
        }
    }

    const login = (event) => {
        event.preventDefault()

        if (userName.length === 0 || userPass.length === 0) {
            setToastData({ type: 'warning', message: 'Debe de llenar todos los campos.' })
            return
        }

        axios.get(`http://localhost:3001/login/loginUser/${userName}/${userPass}`)
            .then(response => {
                if (response.status === 200) {
                    const user = response.data[0].user_rol
                    setToastData({ type: 'success', message: 'Inicio de sesion correcto.' })

                    if (user === 'ADM') window.location = '/admin-dashboard'
                    if (user === 'BLB') window.location = '/librarian-dashboard'
                    if (user === 'ALU') window.location = '/student-dashboard'

                }
            })
            .catch(error => {
                if (error.status === 404) {
                    setToastData({ type: 'error', message: error.response.data })
                    return
                }
                setToastData({ type: 'error', message: 'Error de red, intentelo mas tarde.' })
            })
    }

    return (
        <>
            <div className="h-screen">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <FaBookOpen size={50} className="mx-auto" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Biblioteca Universal
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="space-y-6">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}