import axios from "axios";
import { useEffect, useState } from "react";
import { BiHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

export default function BookRecord() {
    return (
        <div className="p-4">
            <div className="toast toast-end">
            </div>
            <div className="w-full grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-y-0 sm:gap-2">
                <div>
                    <div>
                        <h2 className="font-semibold text-indigo-600 text-3xl">Gestión de libros</h2>
                    </div>
                    <div className="mt-5">
                        <Form />
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="font-semibold text-indigo-600 text-3xl">Tabla de libros</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Form() {
    const [bookName, setBookName] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookGenre, setBookGenre] = useState('')
    const [bookRoute, setBookRoute] = useState('')

    const recordBook = (event) => {
        event.preventDefault()

        const data = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookGenre: bookGenre,
            bookRoute: bookRoute
        }

        axios.post('http://localhost:3001/books/create', data)
            .then(function (response) {

            })
            .catch(function (error) {

            })
    }

    return (
        <form className="w-full space-y-2">
            <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Nombre del libro</label>
                <div className="mt-2">
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        className="input input-bordered w-full block"
                        onChange={(e) => setBookName(e.target.value)}
                        value={bookName}
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Autor del libro</label>
                <div className="mt-2">
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        className="input input-bordered w-full block"
                        onChange={(e) => setBookAuthor(e.target.value)}
                        value={bookAuthor}
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Genero del libro</label>
                <div className="mt-2">
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        className="input input-bordered w-full block"
                        onChange={(e) => setBookGenre(e.target.value)}
                        value={bookGenre}
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Libro</label>
                <div className="mt-2">
                    <input
                        type="file"
                        className="input-bordered file-input w-full block"
                        onChange={
                            (e) => {
                                const file = e.target.files[0]
                                const reader = new FileReader

                                reader.onload = () => {
                                    setBookRoute(reader.result)
                                }

                                reader.readAsDataURL(file)
                            }
                        }
                    />
                    <input
                        className="input input-bordered input-sm block w-full hidden"
                        onChange={(e) => setBookRoute(e.target.value)}
                        value={bookRoute}
                        readOnly
                    />
                </div>
            </div>
            <div className="text-end">
                <button
                    className="btn btn-info w-32"
                    onClick={(event) => {
                        recordBook(event)
                    }}
                >
                    Registrar Libro
                </button>
            </div>
        </form>
    )
}

function Table() {
    const [bookList, setBookList] = useState([])

    const getBooksList = () => {
        axios.get('http://localhost:3001/books/list')
            .then(function (response) {
                setBookList(response.data)

            })
            .catch(function (error) {

            })
    }

    useEffect(() => {
        getBooksList()
    }, [])

    return (
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Autor</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookList.map((book, index) => {
                        return (
                            <tr>
                                <th>{index}</th>
                                <td>{book.book_name}</td>
                                <td>{book.author}</td>
                                <td>
                                    <div>
                                        {
                                            book.book_status ?
                                                <button className="btn btn-sm btn-square btn-outline btn-error">
                                                    <BiHide />
                                                </button>
                                                :
                                                <button className="btn btn-sm btn-square btn-outline btn-success">
                                                    <FaEye />
                                                </button>
                                        }
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}