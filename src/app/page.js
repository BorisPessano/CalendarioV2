'use client'

import {redirect} from 'next/navigation'
import { useEffect,useState } from 'react'



const Home = () => {
    
    const [session,setSession] = useState('')

    useEffect(()=>{
        setSession(JSON.parse(localStorage.getItem('user')))
    },[])

    
    session === (undefined || null) ? redirect('/login'): redirect('/dashboard')
}

export default Home;