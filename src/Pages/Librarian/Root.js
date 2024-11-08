import Navbar from "../../Components/Navbar";
import { Outlet, Navigate } from "react-router-dom";

const links = [
    {
        label: 'Registro de libros',
        href: '/librarian-dashboard/record'
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
                <Navigate to={'/librarian-dashboard/record'} />
                <Outlet />
            </div>
        </>
    )
}