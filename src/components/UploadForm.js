import { useState } from "react";

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
            <input type="file" onChange={uploadHandler} />
            <div className="output">
                {uploadError && <div className="error">{uploadError}</div>}
            </div>
        </form>
    )
}

export default UploadForm
