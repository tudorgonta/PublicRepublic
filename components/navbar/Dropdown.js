const Dropdown = ({ links, dropdown }) => {
    return (
     <ul className={`dropdown ${dropdown ? "show" : ""} `}>
      {links.map(({subSectionTitle, subtarget}, index) => (
       <li key={index}>
        <a href={subtarget} className="py-[0.2rem] px-[2rem] block no-underline hover:underline">{subSectionTitle}</a>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown;