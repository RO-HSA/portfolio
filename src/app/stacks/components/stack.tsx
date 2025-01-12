import Image from 'next/image';
import { FC } from 'react';

export interface StackProps {
  name: string;
  icon: string;
}

const Stack: FC<StackProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 bg-foreground/20 rounded-md h-[72px] w-[172px] px-3">
      <Image src={icon} alt="" width={32} height={32} />
      <span className="text-wrap text-start">{name}</span>
    </div>
  );
};

export default Stack;
