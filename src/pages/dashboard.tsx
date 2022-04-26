import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const color = '#222435';

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-04-10T00:00:00.000Z',
      '2022-04-11T00:00:00.000Z',
      '2022-04-12T00:00:00.000Z',
      '2022-04-13T00:00:00.000Z',
      '2022-04-14T00:00:00.000Z',
      '2022-04-15T00:00:00.000Z',
      '2022-04-16T00:00:00.000Z',
      '2022-04-17T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: 'series1',
    data: [33, 55, 43, 56, 110, 123, 144, 120],
  },
];

export default function Dashboard() {
  const [chartCanRender, setChartCanRender] = useState<boolean>(false);

  useEffect(() => {
    setChartCanRender(true);
    console.log('Chart is ready to render');
  }, []);
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            {chartCanRender && (
              <Chart
                type="area"
                height={160}
                options={options}
                series={series}
              />
            )}
          </Box>

          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            {chartCanRender && (
              <Chart
                type="area"
                height={160}
                options={options}
                series={series}
              />
            )}
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
