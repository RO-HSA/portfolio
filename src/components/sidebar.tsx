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
        'flex flex-col items-end pr-4 pl-2 pt-9 rounded-md border-primary/30 gap-6 min-w-[229px]',
        'fixed inset-y-0 left-0 h-screen bg-background z-50 transition-transform duration-300',
        'lg:pt-0 lg:fixed lg:pl-0 lg:border-r lg:inset-y-auto lg:left-auto lg:rounded-none',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
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
