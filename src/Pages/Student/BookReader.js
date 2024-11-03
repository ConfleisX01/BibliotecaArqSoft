import { useParams } from "react-router-dom";

export default function BookReader() {
    const { book } = useParams()
    console.log(book)

    return (
        <>
            <div className="p-3">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="h-auto lg:col-span-2">
                        {book ? (
                            <iframe
                                src={book}
                                width="100%"
                                height="600px"
                                title="Vista de libro"
                                className="border"
                            />
                        ) : (
                            <div className="skeleton h-32 w-32"></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}