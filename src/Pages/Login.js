import { FaBookOpen } from "react-icons/fa";

export default function Login() {

    const login = (event) => {
        event.preventDefault()
        window.location = '/librarian-dashboard'
    }

    return (
        <>
            <div className="h-screen">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <FaBookOpen size={50} className="mx-auto" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Biblioteca Digital
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
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                                    <div className="text-sm">
                                        <a
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            href="/reset-password"
                                        >
                                            Olvidaste la contraseña?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        className="input input-bordered w-full block"
                                        placeholder="Ingresa tu contraseña"
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
                        <p className="mt-10 text-center text-gray-500">
                            ¿No estás registrado aún?{' '}
                            <a
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                href="/signin"
                            >Regístrate ahora</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}