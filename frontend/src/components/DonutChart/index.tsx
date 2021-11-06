import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'src/types/sale';
import { BASE_URL } from 'src/utils/constants';

type ChartData = {
  labels: string[];
  series: number[];
};

export function DonutChart() {
  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

  useEffect(() => {
    axios.get<SaleSum[]>(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
      const data = response.data;
      const labels: string[] = [];
      const series: number[] = [];

      data.forEach((saleSum) => {
        labels.push(saleSum.sellerName);
        series.push(saleSum.sum);
      });

      setChartData({ labels, series });
    });
  }, []);

  const options: ApexOptions = {
    legend: {
      show: true,
    },
  };
  return (
    <Chart options={{ ...options, labels: chartData.labels }} series={chartData.series} type='donut' height='240' />
  );
}
