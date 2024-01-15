'use client'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import styles from  './register.module.css'
import { useState } from 'react'
import { getRegisterInfo } from '@/app/service/register'


const Register = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const router = useRouter()


    const userRegister = () => {

        if ((name != undefined || name != null) && 
            (surname != undefined || surname != null) &&
            (role != undefined || role != null) &&
            (email != undefined || email != null) &&
            (phone != undefined || phone != null) &&
            (password != undefined || password != null) )
        {
         
            const headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
            const body = {
                name: name,
                surname: surname,
                email: email,
                password:password,
                phone:phone,
                role: parseInt(role),
            }

            Promise.all([getRegisterInfo(body)])
            .then((values) => {
                //console.log(values);
                router.push('/');
            })
            .catch((reason) => {
                console.log(reason);
            });
            
        } else {
            alert('hubo un problema ')
        }
    }

    return (
        <div className={styles.body}>
        <section className="bg-gray-50 dark:bg-gray-1400">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 ">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                CleverIT    
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Registrar Usuario
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                            <input type="text" id="name" name="name" value={name}
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            onChange={(name) => setName(name.target.value)}
                            />
                        </div>

                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                            <input type="text" id="surname" name="surname" value={surname}
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            onChange={(surname) => setSurname(surname.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol:</label>
                            <select id="role" value={role} onChange={(role) => setRole(role.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                <option value="1" selected>Desarrollador</option>
                                <option value="2">Programador</option>
                            </select>
                        </div>

                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" name="email" value={email}
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            onChange={(email) => setEmail(email.target.value)}
                            />
                        </div>

                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" name="password" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"' value={password}
                                onChange={(password) => setPassword(password.target.value)}/>
                        </div>

                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                            <input type="tel" id="phone" name="phone" value={phone}
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            onChange={(phone) => setPhone(phone.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={()=> userRegister()}>Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
      </div>
    )
}
export default Register
