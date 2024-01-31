import {IoCheckmarkCircleOutline} from 'react-icons/io5';

export default function Notification({props}){
    return(
        <div
        className={`font-regular relative block w-full max-w-screen-md rounded-lg ${props.state === 'Error' ? 'bg-red-500': 'bg-green-500' } px-4 py-4 text-base text-white`}
        data-dismissible="alert"
        >
        <div className="absolute top-4 left-4">
            
            <IoCheckmarkCircleOutline />            
        </div>
        <div className="ml-8 mr-12">
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
            {props.state}
            </h5>
            <p className="mt-2 block font-sans text-base font-normal leading-relaxed text-white antialiased">
            {props.text}
            </p>
        </div>
        <div
            data-dismissible-target="alert"
            data-ripple-dark="true"
            className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
        >
            <div role="button" className="w-max rounded-lg p-1">
           
            </div>
        </div>
        </div>
    )
}