import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {

    const { documents } = useFirestore('images')
    console.log(documents);

    return (
        <div className="img-grid">
            {documents && documents.map((doc) => (
                <div className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt="User Images" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
