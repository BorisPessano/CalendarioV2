'use client'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import styles from  './login.module.css'
import { useState } from 'react'
import { getLoginInfo } from '@/app/service/login'


const Login = () =>{

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const router = useRouter()


    const userLogin = () => {
        if ((email != undefined || email != null) && (pass != undefined || pass != null) ){
         
            const headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
            const body = {
                email: email,
                password: pass
            }


            getLoginInfo(body).then(data => {
               let sesion = localStorage.getItem('sesion')
               if (sesion != undefined){
                // redirige
                router.push('/')
               }
               else{
                alert('hubo un problema al iniciar sesion')
               }
        }
    }

    return (
        <div className={styles.body}>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                CleverIT    
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Ingresar
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="Email" name="email" 
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            onChange={(email) => setEmail(email.target.value)}
                            />
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" name="password" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
                                onChange={(password) => setPass(password.target.value)}/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">  
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={()=> userLogin()}>Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
      </div>
    )
}
export default Login
