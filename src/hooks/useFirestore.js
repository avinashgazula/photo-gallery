import { useEffect, useState } from "react"
import { firebaseFirestore } from "../config/firebase"

const useFirestore = (collection) => {
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        const unsubscribe = firebaseFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let docs = []
                snap.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setDocuments(docs)
            })

        return () => unsubscribe()
    }, [collection])

    return { documents }
}

export default useFirestore
