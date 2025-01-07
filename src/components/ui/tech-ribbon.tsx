import { FC, ReactNode } from 'react';

interface TechRibbonProps {
  color: string;
  children: ReactNode;
}

const TechRibbon: FC<TechRibbonProps> = ({ color, children }) => {
  return (
    <li
      className="px-3 py-1 rounded-md text-xs font-bold"
      style={{ backgroundColor: color }}
    >
      {children}
    </li>
  );
};

export default TechRibbon;
