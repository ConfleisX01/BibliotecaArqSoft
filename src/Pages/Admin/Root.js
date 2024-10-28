import Navbar from "../../Components/Navbar";

import {
    Outlet,
    Navigate
} from 'react-router-dom'

const links = [
    {
        label: 'Administración de usuarios',
        href: '/admin-dashboard/users'
    }
]

export default function AdminRoot() {
    return (
        <>
            <div>
                <Navbar
                    title={'Administrador'}
                    links={links}
                />
            </div>
            <div>
                <Navigate to={'/admin-dashboard/users'} />
                <Outlet />
            </div>
        </>
    )
}