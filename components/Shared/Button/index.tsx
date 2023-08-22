import Link from 'next/link';

import './index.scss';

type Props = {
  children: string | number;
  link: string;
  dark?: boolean;
  outline?: boolean;
  block?: boolean;
  event?: () => void;
};

const Button = ({ children, link, dark, outline, block, event }: Props) => {
  return (
    <Link href={link} passHref>
      <button
        className={`btn ${dark && 'dark'} ${outline && 'outline'} ${
          block && 'block'
        }`}
        onClick={event}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
