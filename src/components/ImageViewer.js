const ImageViewer = ({ selectedImage, setSelectedImage }) => {

    const closeImage = (e) => {
        //Close if clicked outside the image
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage(null)
        }
    }

    return (
        <div onClick={closeImage} className="backdrop">
            <img src={selectedImage} alt="large img" />
        </div>
    )
}

export default ImageViewer
