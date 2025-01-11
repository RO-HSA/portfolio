import NavEmailButton from './ui/nav-email-btn';
import LinkButton from './ui/link-button';
import { sidebarItems } from '@/configs/sidebar-items';

const Sidebar = () => {
  return (
    <nav className="flex flex-col items-end pr-4 border-r border-primary/30 h-screen fixed">
      <ul className="flex flex-col items-end w-full gap-2">
        {sidebarItems.map(({ link, title, icon: Icon }) => (
          <li key={title} className="flex justify-end w-full">
            <LinkButton link={link}>
              <Icon />
              {title}
            </LinkButton>
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
