import { Button } from '@nextui-org/react';
import Link from 'next/link';

interface StyledButtonProps {
  scheme?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
}

const StyledButton = ({
  scheme = 'primary',
  children,
  href,
}: StyledButtonProps) => {
  const buttonColor = scheme === 'primary' ? 'bg-primary' : 'bg-secondary';
  return (
    <Button
      as={Link}
      href={href || '#'}
      variant="solid"
      className={`text-default ${buttonColor}`}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
