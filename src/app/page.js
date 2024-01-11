'use client'
import { useState,useEffect } from "react";

const Home = () => {
  const [userData,setUserData] = useState({});

  useEffect(()=> {  
    setUserData(JSON.parse(localStorage.getItem('user')))
  },[])

  return(
    <div className="container mt-3" id="registro">
        <div className="row justify-content-center">
            <div className="card col-12">
                <h1>Registrar Asistencia</h1>
                <form>
                  {console.log(userData.email)}
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" className="form-control" value={userData.email} id="email" placeholder="Ingrese su Email"/>
                    </div>
                    <div className="form-group">
                        <label>Tipo de Asistencia:</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="asistencia" id="presencial"
                                value="presencial"/>
                            <label className="form-check-label" >Presencial</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="asistencia" id="remoto" value="remoto"/>
                            <label className="form-check-label" >Remoto</label>
                        </div>
                    </div>
                    <button type="button"  className="btn btn-primary">Enviar</button>
                </form>
                <div className="spinner-border text-primary text-center mx-auto" role="status" id="spinner">
                    <span className="sr-only">Loading...</span>
                </div>
                <div id="registro"></div>
            </div>
        </div>
    </div>
  )
}

export default Home;