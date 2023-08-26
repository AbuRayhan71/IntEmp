import { Flex, Icon, Text, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FiCalendar,
  FiHome,
  FiMessageSquare,
  FiPlus,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

interface NavItemProps {
  name: string;
  icon: IconType;
  path: string;
}

const LinkItems: Array<NavItemProps> = [
  { name: "Home", icon: FiHome, path: "/" },
  { name: "Employee", icon: FiUsers, path: "/users" },
  { name: "Messages", icon: FiMessageSquare, path: "/message" },

  
];

const SideNav: React.FC = () => {
  return (
    <Flex direction='column'>
      <Box height="20" display="flex" alignItems="center" justifyContent="center">
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          IntEmp
        </Text>
      </Box>
      {LinkItems.map((link) => (
        <NavItem key={link.name} {...link} />
      ))}
    </Flex>
  );
};

const NavItem: React.FC<NavItemProps> = ({ name, icon, path }) => (
  <Link to={path}>
    <Flex
      align='center'
      p='4'
      mx='4'
      borderRadius='lg'
      role='group'
      cursor='pointer'
    >
      <Icon as={icon} fontSize='16' />
      <Text marginLeft='4' fontWeight='semibold'>
        {name}
      </Text>
    </Flex>
  </Link>
);

export default SideNav;
