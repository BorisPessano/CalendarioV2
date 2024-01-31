'use client'
import { useState } from "react"
import { markAsistence } from "../service/markAsistence"

export default function MarkInput(){

    const [remoto,setRemoto] = useState(false)
    const [presencial,setPresencial] = useState(false)

    const markAs = () =>{
        const storage = JSON.parse(localStorage.getItem('user'))

        const body = {
            email: storage.email,
            action: presencial === true ? 1 : (remoto === true ? 2: 1)
        }

        markAsistence(body).then((r) => {
            alert(r.message)
            console.log(r)
        })
    }

    return(
        <form>
            <div className="grid grid-cols-2 gap-4 px-2 w-full">
                <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" onChange={(e) => setPresencial(e.target.value)} id="Presencial" className="form-checkbox h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">Presencial</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" onChange={(e) => setRemoto(e.target.value)} id="Remoto" className="form-checkbox h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">Remoto</span>
                </label>
                </div>
            </div>
            <button onClick={()=> markAs()} className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Marcar Asistencia
            </button>
        </form> 
    )
}