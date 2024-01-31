'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SidebarMenuItem({props}){

    const currentPath = usePathname();

    return(
        <div>
            {
                props.map((item) => { 
                    return( 
                        <Link key={item.path} href={item.path} 
                        className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3
                        ${ currentPath === item.path ? 'bg-blue-800': '' } hover:bg-white/5 transition ease-linear duration-150`}>
                            <div>
                                {item.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold leading-5 text-white">{item.title}</span>
                                <span className="text-sm text-white/50 hidden md:block">{item.subTitle}</span>
                            </div>
                        </Link>
                    
                    )
                })
            }
        </div>
    )

}
