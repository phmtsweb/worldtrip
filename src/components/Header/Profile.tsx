import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface IProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: IProfileProps) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Mascarenhas</Text>
          <Text color="gray.300" fontSize="small">
            pedrohaz@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pedro Mascarenhas"
        src="https://github.com/phmtsweb.png"
      />
    </Flex>
  );
}
