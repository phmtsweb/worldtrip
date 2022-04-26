import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UsersList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="16"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
                cursor="pointer"
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w={['4', '4', '8']}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pedro Mascarenhas</Text>
                    <Text fontSize="sm" color="gray.300">
                      phmtsweb@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>25 de Abril, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="16"
                    colorScheme="purple"
                    leftIcon={isWideVersion ? <Icon as={RiPencilLine} /> : null}
                    cursor="pointer"
                  >
                    {isWideVersion ? 'Editar' : <Icon as={RiPencilLine} />}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pedro Mascarenhas</Text>
                    <Text fontSize="sm" color="gray.300">
                      phmtsweb@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>25 de Abril, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="16"
                    colorScheme="purple"
                    leftIcon={isWideVersion ? <Icon as={RiPencilLine} /> : null}
                    cursor="pointer"
                  >
                    {isWideVersion ? 'Editar' : <Icon as={RiPencilLine} />}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pedro Mascarenhas</Text>
                    <Text fontSize="sm" color="gray.300">
                      phmtsweb@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>25 de Abril, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="16"
                    colorScheme="purple"
                    leftIcon={isWideVersion ? <Icon as={RiPencilLine} /> : null}
                    cursor="pointer"
                  >
                    {isWideVersion ? 'Editar' : <Icon as={RiPencilLine} />}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pedro Mascarenhas</Text>
                    <Text fontSize="sm" color="gray.300">
                      phmtsweb@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>25 de Abril, 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="16"
                    colorScheme="purple"
                    leftIcon={isWideVersion ? <Icon as={RiPencilLine} /> : null}
                    cursor="pointer"
                  >
                    {isWideVersion ? 'Editar' : <Icon as={RiPencilLine} />}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
