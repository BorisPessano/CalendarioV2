import Link from 'next/link'

const Login = () =>{
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
             <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="" alt="logo"/>
                    Clevendario    
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Clevendario</h1>

                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Mail:</label>
                            <input type="email" id="Email" name="Email" 
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            />
                        </div>

                        <div>
                            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Pass:</label>
                            <input type="password" id="Password" name="Password" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'/>
                        </div>
                        <div className="flex items-center justify-between">
                        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Ingresar</button>
                        </div>
                        

                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login

/*
                   

    <div class="row d-flex justify-content-center">
        <button type="submit" class="btn btn-primary mr-3" onclick="Login()">Ingresar</button>
        <button type="button" class="btn btn-success " onclick="register()">Registrarse</button>
    </div>

    <div class="spinner-border text-primary text-center mx-auto" role="status" id="spinner">
        <span class="sr-only">Loading...</span>
    </div>
*/