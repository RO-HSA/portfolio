import NavEmailButton from './ui/nav-email-btn';
import LinkButton from './ui/link-button';
import { useSidebarItems } from '@/hooks';
import LanguageSwitcher from './language-switcher';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarItems = useSidebarItems();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <nav
      className={cn(
        'flex flex-col items-end pr-4 pl-2 pt-2 rounded-md border-primary/30 fixed h-screen gap-6 min-w-[229px]',
        'lg:pt-0 lg:pl-0 lg:border-r lg:fixed bg-background lg:rounded-none z-50 transition-transform duration-300',
        isOpen ? '-translate-x-5' : '-translate-x-64 lg:translate-x-0',
      )}
    >
      <ul className="flex flex-col items-end w-full gap-2">
        {sidebarItems.map(({ link, title, icon: Icon }) => (
          <li key={title} className="flex justify-end w-full">
            <LinkButton
              link={link}
              onClick={handleLinkClick}
              shouldRenderLinkIcon
            >
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
