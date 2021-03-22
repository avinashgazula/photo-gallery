import { motion } from "framer-motion";
import useFirestore from "../hooks/useFirestore";


const ImageGrid = ({ setSelectedImage }) => {

    const { documents } = useFirestore('images')
    console.log(documents);

    return (
        <div className="img-grid">
            {documents && documents.map((doc) => (
                <motion.div
                    onClick={() => setSelectedImage(doc.url)}
                    layout
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='img-wrap'
                    key={doc.id}>
                    <img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        trasnsition={{ delay: 1 }}
                        src={doc.url}
                        alt="User Images" />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
