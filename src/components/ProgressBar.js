import { motion } from "framer-motion";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file }) => {

    const { url, progress } = useStorage(file)

    return (

        // url is used as the condition because the image is uploaded when url is not null
        <>
            {!url && <div>{file.name}</div>}
            {!url && <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: progress + '%' }}>
            </motion.div>}
        </>
    )
}

export default ProgressBar
