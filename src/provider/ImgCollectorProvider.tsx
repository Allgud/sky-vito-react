import { useEffect, useState, createContext, ChangeEvent } from "react";
import { ComponentChildren } from "../types";

export const ImgCollectorContext = createContext({
    visible: true,
    images: [],
    addPicToLocal: (imgs: string[]) => { },
})

const ImgCollectorProvider = ({ children }: ComponentChildren) => {
    const [visible, setVisible] = useState(true)
    const [images, setImages] = useState<string[]>([])

    const addPicToLocal = (imgs: Array<string>) => {
        setImages(prev => prev.concat(imgs))
    }

    useEffect(() => {
        if (images.length >= import.meta.env.VITE_MAX_IMAGES_COUNT) {
            setVisible(false)
        }
    }, [images])

    const value = {
        visible,
        images,
        addPicToLocal
    }

    return (
        <ImgCollectorContext.Provider value={value}>
            {children}
        </ImgCollectorContext.Provider>
    )
}

export default ImgCollectorProvider