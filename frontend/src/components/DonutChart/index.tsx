import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

export function DonutChart() {
  const mockData = {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    series: [477138, 499928, 444867, 220426, 473086],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
  };

  const options: ApexOptions = {
    legend: {
      show: true,
    },
  };
  return <Chart options={{ ...options, labels: mockData.labels }} series={mockData.series} type='donut' height='240' />;
}
