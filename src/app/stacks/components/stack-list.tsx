import { FC } from 'react';

import Stack, { type StackProps } from './stack';

interface StackListProps {
  title: string;
  stack: StackProps[];
}

const StackList: FC<StackListProps> = ({ title, stack }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-2xl">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {stack.map(({ name, icon }) => (
          <Stack key={name} name={name} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default StackList;
