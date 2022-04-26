import { Box, Button, Stack } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {[1, 2, 3, 4, 5, 6].map((pag) => (
          <PaginationItem key={pag} number={pag} isCurrent={pag === 1} />
        ))}
      </Stack>
    </Stack>
  );
}
