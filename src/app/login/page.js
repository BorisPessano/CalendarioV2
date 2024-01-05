import Link from 'next/link'

const Login = () =>{
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Clevendario</h1>

                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Mail:</label>
                        <input type="email" id="Email" name="Email"/>
                    </div>

                    <div>
                        <label>Pass:</label>
                        <input type="password" id="Password" name="Password"/>
                    </div>


                </form>
            </div>
            
            
            
              
                    
                    
                   

                    <div class="row d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary mr-3" onclick="Login()">Ingresar</button>
                        <button type="button" class="btn btn-success " onclick="register()">Registrarse</button>
                    </div>

                    <div class="spinner-border text-primary text-center mx-auto" role="status" id="spinner">
                        <span class="sr-only">Loading...</span>
                    </div>
        </section>
    )
}
export default Login