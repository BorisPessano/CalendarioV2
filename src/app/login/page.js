import Image from 'next/image';
import LoginInputs from '../LoginInputs/components/LoginInputs'

export default function Login(){   
    return(
        <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
            <Image src="https://cleveritimages.blob.core.windows.net/images/Image-URL.png" alt="logo image" width={3000} height={1080}  className="object-cover w-full h-full"/>
        </div>
        
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4 text-gray-600">Login</h1>
        <LoginInputs />
        
        </div>
        </div>
    )
}

