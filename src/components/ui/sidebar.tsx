import NavEmailButton from './nav-email-btn';
import NavLink from './nav-link';
import { sidebarItems } from '@/configs/sidebar-items';

const Sidebar = () => {
  return (
    <nav className="flex flex-col items-end pr-4 border-r border-primary h-full">
      <ul className="flex flex-col items-end w-full gap-2">
        {sidebarItems.map(({ link, title, icon: Icon }) => (
          <li key={title} className="flex justify-end w-full">
            <NavLink link={link}>
              <Icon />
              {title}
            </NavLink>
          </li>
        ))}
        <li className="flex justify-end w-full">
          <NavEmailButton />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
