import { useState } from "react";
import axios from "axios";

import Toast from "../../Components/Toast";

export default function BooksCatalog() {
    const [booksList, setBooksList] = useState([])

    const getBooksList = () => {
        axios.get('http://localhost:3001/books/list')
            .then(function (response) {
                setBooksList(response.data)
            })
            .catch(function (error) {
                
            })
    }

    useState(() => {
        getBooksList()
    }, [])

    return (
        <>
            <div className="w-full flex flex-row justify-center p-4">
                <div className="toast">
                    <Toast message={'Esto es un mensaje mas largo para ver la responsividad'} />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {
                    }
                </div>
            </div>
        </>
    )
}