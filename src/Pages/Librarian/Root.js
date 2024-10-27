import Navbar from "../../Components/Navbar";
import { Outlet, Navigate } from "react-router-dom";

const links = [
    {
        label: 'Catálogo',
        href: '/catalog'
    },
    {
        label: 'Registro de libros',
        href: '/record'
    },
]

export default function LibraryRoot() {
    return (
        <>
            <div>
                <Navbar
                    title={'Biblioteca'}
                    links={links}
                />
            </div>
            <div>
                <Navigate to={'/librarian-dashboard/catalog'} />
                <Outlet />
            </div>
        </>
    )
}