import React, { useState } from 'react'
import { BsEye, BsEyeSlash, BsFacebook } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/useAuth'

const Login = () => {
    const { userLogin } = useAuth()
    const { control, handleSubmit, register, trigger, formState: { errors }, } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: 'onBlur',
        resolver: yupResolver(LoginSchema?.add)
    })
    const [eyeIcon, setEyeIcon] = useState(true);
    const handleLogin = (data) => {
        userLogin({ ...data, token: "12345", storeAddress: "2235 Anthony Avenue Lockman, Weber and Renner", name: "Zuhaib Ghori" })
       
    };
    const handleBlur = async (fieldName) => {
        try {
            await trigger(fieldName);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="w-full flex h-screen bg-[url('assets/images/LoginImage.png')] bg-center bg-cover bg-no-repeat font-Poppins ">

                <div className='flex flex-col  m-auto h-auto bg-white   justify-center py-10 px-10 rounded-3xl'>
                    <div className='flex flex-col items-center'>
                    </div>
                    <div className='flex flex-col mx-auto text-left items-start justify-start'>
                        <div className='text-3xl font-bold text-darkBlack mx-auto text-center w-full pb-2 uppercase mt-10'>Donation Kiosk</div>
                        <div className='text-3xl font-bold text-darkBlack mx-auto text-center w-full pb-2 uppercase '>Super Admin</div>
                        <div className='text-md text-darkBlack mx-auto text-center w-full'>Enter your email and password to sign in</div>
                    </div>
                    <div
                        className=" flex flex-col mx-auto  mt-10 justify-center gap-4 ">
                        <div className='relative flex flex-col w-80'>
                            <label className='text-darkBlack mb-2 ml-2 font-medium'>Email</label>
                            <input
                                control={control}
                                {...register("email")}
                                onBlur={() => handleBlur('email')}
                                name='email'
                                autoComplete="off"
                                type="text" className='h-8  py-5 pl-3 border-black border rounded-lg bg-white  transition-all duration-1000 text-darkBlack text-sm  font-semibold    outline-none  font-Poppins' placeholder='Your Email...' />
                            {errors?.email ? <span className='text-red-500 text-sm mt-2 ml-2'>{errors?.email?.message}</span> : null}
                        </div>
                        <div className='relative flex flex-col w-80 mt-5 mb-5'>
                            <label className='text-darkBlack mb-2 ml-2 font-medium'>Password</label>
                            <div className='w-full relative'>

                                <input
                                    control={control}
                                    {...register("password")}
                                    onBlur={() => handleBlur('password')}
                                    name='password'
                                    type={eyeIcon ? "password" : "text"}
                                    className='h-8 w-full py-5 pl-3  border-black border rounded-lg bg-white  transition-all duration-1000 text-darkBlack   outline-none text-sm  font-semibold  font-Poppins' placeholder='Your Password...' />
                                {eyeIcon ?
                                    <BsEyeSlash onClick={() => setEyeIcon(!eyeIcon)} className='absolute text-[#749aa9] right-3 top-3 text-xl cursor-pointer' />
                                    :
                                    <BsEye onClick={() => setEyeIcon(!eyeIcon)} className='absolute text-[#749aa9] right-3 top-3 text-xl cursor-pointer' />
                                }
                            </div>

                            {errors?.password ? <span className='text-red-500 text-sm mt-2 ml-2'>{errors?.password?.message}</span> : null}

                        </div>
                        <button className='text-white uppercase bg-darkBlack py-2 rounded-xl' onClick={handleSubmit(handleLogin)}>Sign In</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Login