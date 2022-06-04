const Dropdown = ({ submenus, dropdown }) => {
    return (
     <ul className={`dropdown ${dropdown ? "show" : ""} `}>
      {submenus.map(({subSectionTitle}, index) => (
       <li key={index} className="sub-menu-items">
        <a href="/#">{subSectionTitle}</a>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown;