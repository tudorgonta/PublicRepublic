import { useState, useEffect, useRef } from "react";

const MenuItems = ({ sectionTitle, target, links }) => {

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
  <li className="my-5 uppercase" ref={ref}>
   {links != null ? (
    <>
     <button 
        type="button" 
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
        className="inline-flex items-center"
     >
      {sectionTitle}<svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
     </button>
     <ul className={`mob px-7 pt-4 border-solid border rounded-md -mb-6 ${dropdown ? "show" : ""} `}>
      {links.map(({subSectionTitle, subtarget}, index) => (
       <li key={index} className="mb-2">
        <a href={subtarget} className="no-underline hover:underline">{subSectionTitle}</a>
       </li>
      ))}
     </ul>
    </>
   ) : (
    <a href={target} className="no-underline hover:underline">{sectionTitle}</a>
   )}
  </li>
 );
};

export default MenuItems;