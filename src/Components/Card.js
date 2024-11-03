import PdfViewer from "./PdfViewer";

export default function Card({ bookTitle, bookAuthor, bookGenre, university, pdf, setBookSelected }) {
    const openBook = () => {
        setBookSelected(pdf)
    }
    return (
        <article className="flex bg-white transition hover:shadow-xl h-full shadow-sm">
            <div className="hidden sm:block sm:basis-56">
                <PdfViewer base64={pdf} />
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
                    <button
                        className="flex-1 block bg-indigo-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-indigo-400"
                        onClick={openBook}
                    >
                        Leer Libro
                    </button>
                </div>
            </div>
        </article>
    )
}