import MenuItems from './MenuItems'
import Hr from '../Hr';
const NavBar = ({nav}) => {
  return (
    <>
    <nav className='nav-area'>
        <ul className="menus">
            {nav.sections.map(({sectionTitle, target, links}, index) => {
                return <MenuItems sectionTitle={sectionTitle} target={target} links={links} key={index} />;
            })}
        </ul>
    </nav>
    <Hr />
    </>
  )
}

export default NavBar