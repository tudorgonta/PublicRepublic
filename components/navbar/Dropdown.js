const Dropdown = ({ links, dropdown }) => {
    return (
     <ul className={`dropdown ${dropdown ? "show" : ""} `}>
      {links.map(({subSectionTitle, subtarget}, index) => (
       <li key={index} className="sub-menu-items">
        <a href={subtarget}>{subSectionTitle}</a>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown;