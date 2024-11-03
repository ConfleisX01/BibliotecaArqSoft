import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const links = [
    {
        label: 'Catálogo',
        href: '/student-dashboard/books'
    }
]

export default function StudentRoot() {
    return (
        <>
            <div>
                <Navbar
                    title={'Estudiante'}
                    links={links}
                />
            </div>
            <div>
                <Navigate to={'/student-dashboard/books'} />
                <Outlet />
            </div>
        </>
    )
}