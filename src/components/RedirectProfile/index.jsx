import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const RedirectProfile = () => {
    const navigate = useNavigate()
    const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")))

    useEffect(() => {
        if(user) {
            if(user.typeof === "COSTUMER") {
                navigate("costumer")
            } else {
                navigate("marketer")
            }
        }
    }, [user])
}
