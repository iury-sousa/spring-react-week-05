import { NavBar, BarChart, Footer, DataTable, DonutChart } from '@/components';

export function App() {
  return (
    <>
      <NavBar />

      <div className='container'>
        <h1 className='text-primary'> Dashboard de vendas</h1>

        <div className='row px-3'>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Todas vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className='py-3'>
          <h2 className='text-primary'>Todas vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}
