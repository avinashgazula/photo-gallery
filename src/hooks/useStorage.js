import { useEffect, useState } from "react";
import { firebaseFirestore, firebaseStorage, firebaseTimestamp } from "../config/firebase";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = firebaseStorage.ref(file.name)
        const collectionRef = firebaseFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentageUploaded = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentageUploaded)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = firebaseTimestamp()
            collectionRef.add({ url, createdAt })
            setUrl(url)
        })
    }, [file])

    return { progress, error, url }
}

export default useStorage;