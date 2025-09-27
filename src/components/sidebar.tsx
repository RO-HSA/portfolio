import NavEmailButton from './ui/nav-email-btn';
import LinkButton from './ui/link-button';
import { useSidebarItems } from '@/hooks';
import LanguageSwitcher from './language-switcher';

const Sidebar = () => {
  const sidebarItems = useSidebarItems();

  return (
    <nav className="flex flex-col items-end pr-4 border-r border-primary/30 h-screen fixed gap-6 min-w-[229px]">
      <ul className="flex flex-col items-end w-full gap-2">
        {sidebarItems.map(({ link, title, icon: Icon }) => (
          <li key={title} className="flex justify-end w-full">
            <LinkButton link={link} shouldRenderLinkIcon>
              <Icon />
              {title}
            </LinkButton>
          </li>
        ))}
        <li className="flex justify-end w-full">
          <NavEmailButton />
        </li>
      </ul>

      <LanguageSwitcher />
    </nav>
  );
};

export default Sidebar;
