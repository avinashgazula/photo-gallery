import { motion } from "framer-motion";
import { useState } from "react";
import ProgressBar from './ProgressBar';


const UploadForm = () => {

    const [uploadError, setUploadError] = useState(null)

    const [files, setFiles] = useState(null)

    const clearState = () => {
        setFiles(null)
        setUploadError(null)
    }


    const uploadMultipleImages = (e) => {
        e.preventDefault()
        clearState()

        const uploadedFiles = e.target.files
        if (uploadedFiles) {
            setFiles(uploadedFiles)
            setFiles(Array.from(uploadedFiles))
        } else {
            setUploadError('Upload Images of the type PNG/JPG')
        }

    }

    return (
        <form>
            <motion.div whileHover={{ scale: 1.3 }}>
                <label>
                    <input type="file" accept=".png,.jpg,.jpeg" multiple onChange={uploadMultipleImages} />
                    <span>+</span>
                </label>
            </motion.div>

            <div className="output">
                {uploadError && <div className="error">{uploadError}</div>}
                {files && files.map(image => (
                    <>
                        {image && <ProgressBar file={image} />}
                    </>
                ))}
            </div>
        </form>
    )
}

export default UploadForm
