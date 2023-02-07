import { ImgCollectorContext } from "../provider/ImgCollectorProvider";
import { useContext } from "react";

export const useImgCollector = () => {
    return useContext(ImgCollectorContext)
}