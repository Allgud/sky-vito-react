import { useContext } from "react";
import { ReferenceContext } from "../provider/referenceProvider";

export const useReference = () => {
    return useContext(ReferenceContext)
}
