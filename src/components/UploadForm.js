import { motion } from "framer-motion";
import { useState } from "react";
import ProgressBar from './ProgressBar';


const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [uploadError, setUploadError] = useState(null)

    const allowedFileTypes = ['image/png', 'image/jpeg']

    const clearState = () => {
        setFile(null)
        setUploadError(null)
    }

    const uploadHandler = (e) => {
        e.preventDefault();
        clearState()

        const uploadedFile = e.target.files[0]

        if (uploadedFile && allowedFileTypes.includes(uploadedFile.type)) {
            setFile(uploadedFile)
        } else {
            setFile(null)
            setUploadError('Upload images of the type png/jpeg')
        }
    }

    return (
        <form>
            <motion.div whileHover={{ scale: 1.3 }}>
                <label>
                    <input type="file" onChange={uploadHandler} />
                    <span>+</span>
                </label>
            </motion.div>


            <div className="output">
                {uploadError && <div className="error">{uploadError}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm
