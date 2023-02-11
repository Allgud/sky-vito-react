import { ReactElement, useEffect } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useNavigate } from "react-router-dom"

type ProtectedChildren = {
    children: ReactElement
}

const ProtectedRoute = ({children}:ProtectedChildren) => {
    const { isAuth } = useAppSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuth) navigate("/")
    }, [])

    return children
}

export default ProtectedRoute