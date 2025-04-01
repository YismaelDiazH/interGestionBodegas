import { ChevronFirst, MoreVertical } from "lucide-react";

export default function Sidebar( { children } ) {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
            <img src="https://img.logoipsum.com/243.svg" alt=""  className="w-32"/>

        </div>
        <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
        <ChevronFirst/>

        </button>
      

     <ul className="flex-1 px-3">{children}</ul>
    <div className="border-t flex p3">
    <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" className="w-10 h-10 rounded-md"/>
    <div className="{`flex justify-between items-center w-52 ml-3`}>">
        <div className="leading-4">
            <h4 className="fint-semibold">John Doe</h4>
           <span className="text-xs text-gray-600">john@gmail.com</span>

        </div>
        <MoreVertical size={20}/>

    </div>
    </div>
     </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  return (
    <li className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors"
    ${ }>
      {icon}
      <span>{text}</span>
    </li>
  );
}