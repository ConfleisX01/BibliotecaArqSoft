export default function ErrorPage() {
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            <h2 className="text-6xl font-extrabold text-gray-800">404</h2>
            <h3 className="text-4xl font-semibold text-gray-800 mt-4">¡Página no encontrada!</h3>
            <p className="text-lg text-gray-600 mt-2 mx-4 text-center">
                La página que estás buscando no existe, ha sido movida o se encuentra temporalmente fuera de servicio.
            </p>
            <p className="text-lg text-gray-600 mt-2 mx-4 text-center">
                Si crees que esto es un error, vuelve a intentarlo más tarde o revisa la URL.
            </p>
            <a className="m-2 font-medium text-blue-600 text-lg" href="/">Regresar al inicio</a>
        </div>
    );
}
