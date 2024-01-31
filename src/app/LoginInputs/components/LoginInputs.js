'use client'

import { useEffect, useState } from "react"
import { getLoginInfo } from '../../service/login'
import Notification from "../../Components/Notification";
import { useRouter } from "next/navigation";


export default function loginInputs(user,pass){

    const [usuario,setUser] = useState(user);
    const [password,setPass] = useState(pass);
    const [messageType,setMessageType] = useState('')
    const [message,setMessage] = useState('')
    const router = useRouter();


    const sendLogin = () => {
        const body = {
            email: usuario,
            password: password
        }
        
        
        
        getLoginInfo(body).then((r)=>{
            if (r.message){
                console.log('Error',r)   
                setMessageType('Error')
                const msg = {
                    state: 'Error',
                    text: r.message
                }
                setMessage(msg)
            }else{ 
                
                localStorage.setItem('sesion',r.access_token)
                localStorage.setItem('user',JSON.stringify(r.user))  
                router.push('/dashboard')  
            }
            
        })
    }
    
    return(
        <div> 
            <div className="mb-4">
            <label  className="block text-gray-600">Email</label>
            <input type="email" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-gray-600"
             autoComplete="off" onChange={(e) => setUser(e.target.value)} />
            </div>
            
            <div className="mb-4">
            <label  className="block text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-gray-600" 
            autoComplete="off" onChange={(e) => setPass(e.target.value)} />
            </div>
            
            <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full" onClick={(e) => sendLogin()}>Login</button>
            <div className="mb-6 mt-6">
            {messageType === 'Error' ? <Notification props={message}/>: ''}
            </div>
            
        </div>
    )
}