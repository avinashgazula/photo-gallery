import { motion } from "framer-motion"

const ImageViewer = ({ selectedImage, setSelectedImage }) => {

    const closeImage = (e) => {
        //Close if clicked outside the image
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage(null)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeImage}
            className="backdrop">
            <motion.img
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                src={selectedImage}
                alt="large img" />
        </motion.div>
    )
}

export default ImageViewer
