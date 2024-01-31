'use client'

import { useEffect,useState } from 'react';
import {IoHomeOutline} from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Profile(){
    const [session,setSession] = useState('')
    const router = useRouter();
    
    useEffect(()=> {
        
        setSession(JSON.parse(localStorage.getItem('user')))
        console.log(session)
        if (session === undefined || session === '' ){
            //router.push('/login')
        }
    },[])

    return(      
    <div  className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
            <Link href="/dashboard" className="inline-flex space-x-2 items-center">
                <span>
                    <IoHomeOutline className='mr-2'/>
                </span>
                <span className="text-sm md:text-base font-bold">
                    { 
                    session != undefined ? session.name + ' ' + session.surname: ''
                    }
                </span>
            </Link>
    </div>
    )
}

