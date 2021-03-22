import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {

    const { documents } = useFirestore('images')
    console.log(documents);

    return (
        <div className="img-grid">
            {documents && documents.map((doc) => (
                <div onClick={() => setSelectedImage(doc.url)} className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt="User Images" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
