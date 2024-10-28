import { FaBook } from "react-icons/fa6";

import {
    Link
} from 'react-router-dom'

export default function Card({ bookTitle, bookAuthor, bookGenre, bookId, university }) {
    return (
        <article className="flex bg-white transition hover:shadow-xl h-full shadow-sm">
            <div className="hidden sm:block sm:basis-56">
                <img
                    alt=""
                    src="https://imgs.search.brave.com/6IMzIN1fJsevQRNwZjjz7x4WWMS5q-292NI0ynKSJj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTY1/MTcxMzEvcGhvdG8v/Ym9va2Nhc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUtK/elRtQ0RZUlNjRWVJ/dWgtc25SQXlKaFJP/Nk8ta1I5YWRnYjE5/Vlg5bVk9"
                    className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                        <h3 className="font-bold uppercase text-gray-900">
                            {bookTitle}
                        </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 font-semibold">
                        {bookAuthor}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                        atque dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                    <div className="badge badge-primary badge-outline">{university}</div>
                </div>

                <div className="flex">
                    <p className="flex-1 block bg-yellow-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900">
                        {bookGenre}
                    </p>
                    <Link
                        to={`/student-dashboard/reader/${bookId}`}
                        className="flex-1 block bg-indigo-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-indigo-400"
                    >
                        Leer Libro
                    </Link>
                </div>
            </div>
        </article>
    )
}