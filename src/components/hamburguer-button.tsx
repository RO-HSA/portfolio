interface HamburguerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const HamburguerButton = ({ onClick, isOpen }: HamburguerButtonProps) => {
  return (
    <button
      className="flex flex-col gap-1 items-center justify-center w-10 h-10 fixed top-0 left-0 lg:hidden z-50"
      onClick={onClick}
    >
      <span
        className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      ></span>
    </button>
  );
};

export default HamburguerButton;
