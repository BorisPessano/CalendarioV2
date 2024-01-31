import { IoCalendarOutline, IoKeypadOutline,IoDesktopOutline } from 'react-icons/io5'
import Profile from './Profile'
import SidebarMenuItem from './SidebarMenuItem'

export default function Sidebar(){

    const devmenuItems = [
        {
            path:'/dashboard',
            icon: <IoDesktopOutline/>,
            title: 'Inicio',
            subTitle: 'Marcas de asistencia'
        },
        {
            path:'/dashboard/calendar',
            icon: <IoCalendarOutline/>,
            title: 'Registrar dias',
            subTitle: 'Marcas de asistencia'
        },
        {
            path:'/dashboard/lastmonths',
            icon: <IoCalendarOutline/>,
            title: 'Meses anteriores',
            subTitle: 'registro historico'
        }
    ]

    const adminMenuItem = [
        {
            path:'dashboard/calendar',
            icon: <IoKeypadOutline/>,
            title: 'Ajustar Feriados',
            subTitle: 'Ajusta los feriados'
        },
        {
            path:'dashboard/calendar',
            icon: <IoCalendarOutline/>,
            title: 'Registrar dias',
            subTitle: 'Marcas de asistencia'
        },
        {
            path:'dashboard/lastmonths',
            icon: <IoCalendarOutline/>,
            title: 'Meses anteriores',
            subTitle: 'registro historico'
        }
    ]
    
    return(
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">Cleverdario</h1>
                <p className="text-slate-500 text-sm">Control de asistencias</p>
            </div>
            <Profile/>
            <div id="nav" className="w-full px-6">
                <SidebarMenuItem  props={devmenuItems} />
            </div>
        </div>
    )
}