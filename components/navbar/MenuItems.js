import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const MenuItems = ({title, target, links, depthLevel }) => {
 const router = useRouter();
 const [dropdown, setDropdown] = useState(false);
 let ref = useRef();
 useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

 return (
  <li className="text-sm uppercase text-gray-900 relative text-center items-center font-Bulkey tracking-[0.1em] first:before:content-[''] first:before:absolute first:before:-left-0.5 first:before:top-[15%] first:before:w-[1.5px] first:before:h-3/5 first:before:bg-gray-200 after:content-[''] after:absolute after:-right-0.5 after:top-[15%] after:w-[1.5px] after:h-3/5 after:bg-gray-200" ref={ref}>
   {links != null ? (
    <>
     <button 
        type="button" 
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
        className="hover:underline focus:underline py-[0.2rem] px-[2rem] transition-opacity inline-flex items-center bg-transparent cursor-pointer w-full border-none uppercase text-center"
     >
      {title}<svg className="w-4 h-4 ml-1 mb-[0.2rem]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
     </button>
     <Dropdown 
        links={links}
        dropdown={dropdown}
        depthLevel={depthLevel}
     />
    </>
   ) : (
    <a href={target} className={`py-[0.2rem] px-[2rem] block no-underline hover:underline ${router.pathname == target ? "active" : ""}`}>{title} </a>
   )}
  </li>
 );
};

export default MenuItems;