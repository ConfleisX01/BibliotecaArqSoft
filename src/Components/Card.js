export default function Card({ bookTitle, bookAuthor, bookGenre}) {
    return (
        <div className="card bg-base-100 hover:bg-base-200 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{bookTitle}</h2>
                <p>{bookAuthor}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{bookGenre}</div>
                </div>
            </div>
        </div>
    )
}