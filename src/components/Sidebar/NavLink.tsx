import { Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkprops} from "@chakra-ui/react"
import { ElementType } from "react"
import { ActiveLink } from "../ActiveLink"

interface NavLinkProps extends ChakraLinkprops{
  icon: ElementType; // referencia do componente
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}