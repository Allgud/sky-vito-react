import { useEffect, useState, createContext, ChangeEvent } from "react";
import { ComponentChildren } from "../types";

export const ImgCollectorContext = createContext({
    visible: true,
    images: [],
    addPicToLocal: (imgs: string[]) => { },
    getFiles: (evt: ChangeEvent<FormData>) => { },
    files: []
})

const ImgCollectorProvider = ({ children }: ComponentChildren) => {
    const [visible, setVisible] = useState(true)
    const [images, setImages] = useState<string[]>([])
    const [files, setFiles] = useState([])

    const addPicToLocal = (imgs: Array<string>) => {
        setImages(prev => prev.concat(imgs))
    }

    const getFiles = (evt: ChangeEvent<FileList>) => {
        setFiles(evt.target.files)
    }

    useEffect(() => {
        if (images.length >= import.meta.env.VITE_MAX_IMAGES_COUNT) {
            setVisible(false)
        }
    }, [images])

    const value = {
        visible,
        images,
        addPicToLocal,
        getFiles,
        files
    }

    return (
        <ImgCollectorContext.Provider value={value}>
            {children}
        </ImgCollectorContext.Provider>
    )
}

export default ImgCollectorProvider