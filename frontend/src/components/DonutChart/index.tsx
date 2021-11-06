import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'src/types/sale';
import { BASE_URL } from 'src/utils/constants';

type ChartData = {
  labels: string[];
  series: number[];
};

export function DonutChart() {
  let chartData: ChartData = { labels: [], series: [] };

  axios.get<SaleSum[]>(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
    const data = response.data;
    const labels: string[] = [];
    const series: number[] = [];

    data.forEach((saleSum) => {
      labels.push(saleSum.sellerName);
      series.push(saleSum.sum);
    });

    chartData = { labels, series };

    console.log(chartData);
  });

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
