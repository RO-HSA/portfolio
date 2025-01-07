'use client';

import { useEffect, useState } from 'react';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  useClose,
} from '@headlessui/react';
import { MdOutlineMail, MdContentCopy } from 'react-icons/md';
import { FaRegSquareCheck } from 'react-icons/fa6';

const Closer = () => {
  const close = useClose();

  useEffect(() => {
    setTimeout(() => {
      close();
    }, 600);
  });

  return <></>;
};

const NavEmailButton = () => {
  const [isCopying, setIsCopying] = useState<boolean>(false);

  const copyToClipboard = () => {
    setIsCopying(true);
    navigator.clipboard.writeText('robertdahora@gmail.com');

    setTimeout(() => {
      setIsCopying(false);
    }, 600);
  };

  return (
    <div className="flex items-center py-2 px-2 rounded-md h-12 max-w-[218px] w-full transition-colors hover:bg-foreground/20 hover:text-primary cursor-default relative">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-1 text-sm">
          <MdOutlineMail size={14} />
          E-mail
        </div>
        <Popover className="relative flex items-center">
          <PopoverButton className="focus:outline-none focus:ring-0">
            {isCopying ? (
              <FaRegSquareCheck
                size={16}
                className="cursor-default hover:text-primary/60"
              />
            ) : (
              <MdContentCopy
                size={16}
                className="cursor-pointer hover:text-primary/60"
                onClick={copyToClipboard}
              />
            )}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            transition
            className="bg-foreground/40 p-1 rounded-md text-foreground text-xs mt-2 transition duration-300 ease-in-out data-[closed]:opacity-0"
          >
            <p>E-mail copiado com sucesso!</p>
            <Closer />
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
};

export default NavEmailButton;
