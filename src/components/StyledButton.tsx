import { Button, ButtonProps } from '@nextui-org/react';
import Link from 'next/link';

interface StyledButtonProps extends ButtonProps {
  scheme?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
}

const StyledButton = ({
  scheme = 'primary',
  children,
  href,
  ...rest
}: StyledButtonProps) => {
  const buttonColor = scheme === 'primary' ? 'bg-primary' : 'bg-secondary';
  return (
    <Button
      as={Link}
      href={href || '#'}
      variant="solid"
      className={`text-[18px] py-0 ${buttonColor}`}
      size="sm"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
