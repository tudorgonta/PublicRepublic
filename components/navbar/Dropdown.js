import DropItems from "./DropItems";
const Dropdown = ({ links, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
     <ul className={`dropdown text-[10px] ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {links.map(({links, title, target}, key) => (
        <DropItems title={title} target={target} links={links} depthLevel={depthLevel} />
      ))}
     </ul>
    );
   };
   
   export default Dropdown;