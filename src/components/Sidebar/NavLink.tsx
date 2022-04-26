import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface INavLinkProps extends LinkProps {
  text: string;
  icon: ElementType;
  href: string;
}

export function NavLink({ text, icon, href, ...rest }: INavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        alignItems="center"
        _hover={{ textDecoration: 'none' }}
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {text}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
