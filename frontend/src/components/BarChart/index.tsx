import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'src/types/sale';
import { BASE_URL } from 'src/utils/constants';
import { round } from 'src/utils/format';

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

const options: ApexOptions = {
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
};

export function BarChart() {
  const [chartData, setChartData] = useState<ChartData>({ labels: { categories: [] }, series: [] });

  useEffect(() => {
    axios.get<SaleSuccess[]>(`${BASE_URL}/sales/success-by-seller`).then((response) => {
      const data = response.data;
      const categories: string[] = [];
      const series: number[] = [];

      const oneHundred = 100;
      data.forEach((saleSuccess) => {
        categories.push(saleSuccess.sellerName);
        series.push(round((oneHundred * saleSuccess.deals) / saleSuccess.visited, 1));
      });

      setChartData({ labels: { categories }, series: [{ name: '% Sucesso', data: series }] });
    });
  }, []);

  return <Chart options={{ ...options, xaxis: chartData.labels }} series={chartData.series} type='bar' height='240' />;
}
