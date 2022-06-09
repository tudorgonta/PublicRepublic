import MenuItems from './MenuItems'
import Hr from '../Hr';
import {useState} from 'react'
import MobMenu from './MobMenu'

const NavBar = ({nav}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
    <nav className='flex justify-center items-center max-w-full my-0 mx-auto h-15 py-0 px-5'>

    <section className="MOBILE-MENU flex lg:hidden">

      <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      </div>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        {/* X sign */}
        <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)} >
          <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        {/* MENU */}
        <ul className="flex flex-col items-center justify-between min-h-[250px] font-Bulkey">
          {nav.sections.map(({sectionTitle, target, links}, index)=> {
            return <MobMenu sectionTitle={sectionTitle} target={target} links={links} key={index} />;
          })}
        </ul>

      </div>

    </section>

      <ul className="DESKTOP_MENU hidden lg:flex lg:flex-wrap list-none">
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