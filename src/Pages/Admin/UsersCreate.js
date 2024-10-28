import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";

export default function UsersCreate() {
    const [selectedUser, setSelectedUser] = useState(null)

    const loadUserInformation = (user) => {
        setSelectedUser(user)
    }

    return (
        <div className='p-3'>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="w-full">
                    <h2 className='text-3xl text-indigo-500 font-medium'>Registro de nuevos usuarios</h2>
                    <Form selectedUser={selectedUser} />
                </div>
                <div className="w-full">
                    <h2 className='text-3xl text-indigo-500 font-medium'>Tabla de usuarios existentes</h2>
                    <Table loadUserInformation={loadUserInformation} />
                </div>
            </div>
        </div>
    )
}

function Form({ selectedUser }) {
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userRol, setUserRol] = useState('')
    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        if (selectedUser) {
            setUserId(selectedUser.user_id)
            setUserName(selectedUser.user_name)
            setUserPassword(selectedUser.user_password)
            setUserRol(selectedUser.user_rol)
            setIsUpdating(true)
        }
    }, [selectedUser])

    const createNewAccount = () => {
        const data = {
            userName: userName,
            userPassword: userPassword,
            userRol: userRol
        }

        console.log(data)

        axios.post('http://localhost:3001/createAccount', data)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.error(error)
            })
    }

    const updateAccount = () => {
        const data = {
            userId: userId,
            userName: userName,
            userPassword: userPassword,
            userRol: userRol
        }

        console.log(data)

        axios.post('http://localhost:3001/users/updateUser', data)
            .then(function (response) {
                console.log(response.data)
                setIsUpdating(false)
            })
            .catch(function (error) {
                console.error(error)
            })
    }

    return (
        <div className='flex flex-col gap-2'>
            <label className="block text-sm font-medium">Nombre de usuario</label>
            <input type="text" value={userName} className="input input-bordered w-full" onChange={(e) => setUserName(e.target.value)} />

            <label className="block text-sm font-medium">Contraseña</label>
            <input type="password" value={userPassword} className="input input-bordered w-full" onChange={(e) => setUserPassword(e.target.value)} />

            <label className="block text-sm font-medium">Rol del usuario</label>
            <select value={userRol} className="select select-bordered w-full" onChange={
                (e) => {
                    setUserRol(e.target.value)
                }
            }>
                <option value="ADM">Administrador</option>
                <option value="BLB">Bibliotecario</option>
                <option value="ALU">Alumno</option>
            </select>
            {
                isUpdating ?
                    <button className="btn btn-warning w-64" onClick={() => updateAccount()}>Actualizar Usuario</button> :
                    <button className="btn btn-primary w-64" onClick={() => createNewAccount()}>Crear Usuario</button>
            }
        </div >
    )
}

function Table({ loadUserInformation }) {
    const [usersList, setUsersList] = useState([])

    const getUsersList = () => {
        axios.get('http://localhost:3001/users/list')
            .then(response => setUsersList(response.data))
            .catch(error => console.error(error))
    }

    const deleteUserAccount = (userId) => {
        axios.post('http://localhost:3001/users/deleteUser', { userId })
            .then(() => getUsersList())
            .catch(error => console.error(error))
    }

    useEffect(() => {
        getUsersList()
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
                <thead>
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium">#</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium">Nombre</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium">Rol</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {
                        usersList.map((user, index) => (
                            <tr key={index}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium">{index + 1}</td>
                                <td className="whitespace-nowrap px-4 py-2">{user.user_name}</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    {user.user_rol === 'ADM' ? 'Administrador' : user.user_rol === 'BLB' ? 'Bibliotecario' : 'Alumno'}
                                </td>
                                <td className="flex gap-2">
                                    <button className="btn btn-sm btn-outline btn-warning" onClick={() => loadUserInformation(user)}>
                                        <FaPen />
                                    </button>
                                    <button className="btn btn-sm btn-outline btn-error" onClick={() => deleteUserAccount(user.user_id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}