import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Auth = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()


    return (
        !token ? <Outlet /> : navigate("/")
    )


}

export default Auth