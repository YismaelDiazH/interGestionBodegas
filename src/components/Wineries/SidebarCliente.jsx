import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdWarehouse, MdPeople } from "react-icons/md";

const SidebarCliente = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen custom-bg shadow-lg ${isOpen ? "w-52" : "w-20"} transition-all duration-300 p-4 flex flex-col`}>

      <button 
        className="btn btn-square btn-ghost mb-4 self-end"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "←" : "→"}
      </button>


      <ul className="menu p-0 space-y-2">
        <li>
          <Link to="/renta/" className="flex items-center gap-2">
            <MdDashboard size={24} /> {isOpen && "Dashboard"}
          </Link>
        </li>
        <li>
          <Link to="/renta/sedes" className="flex items-center gap-2">
            <MdWarehouse size={24} /> {isOpen && "Sedes"}
          </Link>
        </li>
        <li>
          <Link to="/sedes/bodega" className="flex items-center gap-2">
            <MdPeople size={24} /> {isOpen && "Pagos"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarCliente;
