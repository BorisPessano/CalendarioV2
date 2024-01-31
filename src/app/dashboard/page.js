import MarkInput from '../MarkInput/MarkInput'
const Dashboard = () => {
    return(        
    <div className="p-2 w-full text-slate-900">
        <div className="max-w-2xl mx-auto">

        <div className="flex flex-col h-[100vh]">
            <div className="relative flex flex-col items-center rounded-[20px] w-[1080px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl font-bold text-dark-700 dark:text-black">
                        Registrar Asistencia
                    </h4>
                </div>
                <MarkInput/>
            </div>  
        </div>


        </div>
    </div>
    )
}

export default Dashboard;