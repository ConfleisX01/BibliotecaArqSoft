import axios from "axios";
import { useEffect, useState } from "react";
import { BiHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

export default function BookRecord() {
    const [bookList, setBookList] = useState([])

    const [selectedBook, setSelectedBook] = useState()

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
        <div className="p-4">
            <div className="toast toast-end">
            </div>
            <div className="w-full grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-y-0 sm:gap-2">
                <div>
                    <div>
                        <h2 className="font-semibold text-indigo-600 text-3xl">Gestión de libros</h2>
                    </div>
                    <div className="mt-5">
                        <Form
                            refreshBooks={getBooksList}
                            selectedBook={selectedBook}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="font-semibold text-indigo-600 text-3xl">Tabla de libros</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <Table
                            books={bookList}
                            selectedBook={setSelectedBook}
                            refreshBooks={getBooksList}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Form({ refreshBooks, selectedBook }) {
    const [bookId, setBookId] = useState('')
    const [bookName, setBookName] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookGenre, setBookGenre] = useState('')
    const [bookRoute, setBookRoute] = useState('')

    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        if (selectedBook) {
            setIsUpdating(true)
            loadBookInformation()
        }
    }, [selectedBook])

    const loadBookInformation = () => {
        setBookId(selectedBook.book_id)
        setBookName(selectedBook.book_name)
        setBookAuthor(selectedBook.book_author)
        setBookGenre(selectedBook.book_genre)
        setBookRoute(selectedBook.book_route)
    }

    const recordBook = () => {
        const data = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookGenre: bookGenre,
            bookRoute: bookRoute
        }

        axios.post('http://localhost:3001/books/create', data)
            .then(function (response) {
                console.log(response.data)
                refreshBooks()
                setIsUpdating(false)
            })
            .catch(function (error) {

            })
    }

    const updateBook = () => {
        const data = {
            bookId: bookId,
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookGenre: bookGenre,
            bookRoute: bookRoute
        }

        axios.post('http://localhost:3001/books/update', data)
            .then(function (response) {
                console.log(response.data)
                isUpdating(false)
            })
            .then(function (error) {
                console.error(error)
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
                {
                    isUpdating ?
                        <button
                            className="btn btn-warning"
                            onClick={() => updateBook()}
                        >Actualizar libro</button> :
                        <button
                            className="btn btn-primary"
                            onClick={(e) => recordBook(e)}
                        >Crear Libro
                        </button>
                }
            </div>
        </form>
    )
}

function Table({ books, selectedBook, refreshBooks }) {
    
    const updateBookStatus = (bookId, bookStatus) => {
        const data = {
            bookId: bookId,
            bookStatus: bookStatus
        }

        axios.post('http://localhost:3001/books/updateStatus', data)
            .then(function (response) {
                console.log(response.data)
                refreshBooks()
            })
            .catch(function (error) {
                console.error(error)
            })

    }

    return (
        <table className="table">
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
                    books.map((book, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{book.book_name}</td>
                                <td>{book.book_author}</td>
                                <td className="flex gap-2">
                                    <div>
                                        {
                                            book.book_status ?
                                                <button
                                                    className="btn btn-sm btn-square btn-outline btn-error"
                                                    onClick={() => updateBookStatus(book.book_id, !book.book_status)}
                                                >
                                                    <BiHide />
                                                </button>
                                                :
                                                <button
                                                    className="btn btn-sm btn-square btn-outline btn-success"
                                                    onClick={() => updateBookStatus(book.book_id, !book.book_status)}
                                                >
                                                    <FaEye />
                                                </button>
                                        }
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-sm btn-square btn-warning btn-outline"
                                            onClick={() => selectedBook(book)}
                                        >
                                            <FaPen />
                                        </button>
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