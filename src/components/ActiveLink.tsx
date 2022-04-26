import { shouldForwardProp } from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  sholdMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  sholdMatchExactHref = false,
  ...rest
}: IActiveLinkProps) {
  const { asPath } = useRouter();
  const isActive =
    (shouldForwardProp && (asPath === rest.href || asPath === rest.as)) ||
    (!sholdMatchExactHref &&
      (asPath.startsWith(String(rest.href)) ||
        asPath.startsWith(String(rest.as))));
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.500',
      })}
    </Link>
  );
}
