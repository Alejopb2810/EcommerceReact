import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {
    const [isLogged, setIsLogged] = useState(false)

    const navigate = useNavigate()

    const { register, reset, handleSubmit } = useForm()

    const submit = data => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
                navigate('/')
            })
            .catch(err => console.log(err))

        reset({
            email: "",
            password: ""
        })
    }

    useEffect(() => {
        const condition = localStorage.getItem('token') ? true : false
        setIsLogged(condition)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    if (isLogged) {
        return (
            <div className='logout-container'>
                <h1 className='logout__title'>✔️ User has already been logged in 😁</h1>
                <button className='logout__btn' onClick={handleLogout}>Logout</button>
            </div>
        )
    }

    return (
        <div className='login-container'>
            <h1 className='login__title'>😃 Enter User ❕</h1>
            <form className='login__form' onSubmit={handleSubmit(submit)}>
                <div className='login__email'>
                    <label className='login__label' htmlFor="email">Email</label>
                    <input className='login__input' type="text" id='email' {...register("email")} />
                </div>
                <div className='login__password'>
                    <label className='login__label' htmlFor="password">Password</label>
                    <input className='login__input1' type="password" id='password' {...register("password")} />
                </div>
                <div className='login__structure'>
                    <button className='login__btn'>Login</button>
                </div>
            </form>
        </div>

    )
}

export default Login