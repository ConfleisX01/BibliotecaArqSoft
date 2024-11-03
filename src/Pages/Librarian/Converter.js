export default function PDFViewer({ base64 }) {
    return (
        <div className="h-full">
            {
                base64 ?
                    <Viewer base64={base64} /> :
                    <Skeleton />
            }
        </div>
    )
}

function Skeleton() {
    return (
        <div className="flex flex-col gap-2 h-full">
            <div className="skeleton h-10 w-1/2"></div>
            <div className="skeleton h-full w-full"></div>
        </div>
    )
}

function Viewer({ base64 }) {
    return (
        <div className="flex flex-col gap-2 h-full">
            <div>
                <h2 className="font-semibold text-indigo-600 text-3xl">Visualizador del libro</h2>
            </div>
            <div className="h-full w-full">
                <iframe
                    src={base64.book_route}
                    className="w-full h-full scroll-smooth"
                />
            </div>
        </div>
    )
}