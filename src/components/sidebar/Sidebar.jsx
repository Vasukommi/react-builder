import React from 'react';
import { useSelector } from 'react-redux'
import Elements from "./elements/Elements";
import "./Sidebar.css";


const Sidebar = () => {
    const elementsArray = useSelector(state => state.sidebarSlice.sidebarElements)
    return (
        <div className="sidebar-section">
            {elementsArray.map((eachElement) => (
                <Elements key={eachElement.id} eachElement={eachElement} />
            ))}
        </div>
    )
}

export default Sidebar;