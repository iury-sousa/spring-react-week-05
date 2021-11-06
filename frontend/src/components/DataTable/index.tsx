import axios from 'axios';
import { useEffect, useState } from 'react';
import { SalePage } from 'src/types/sale';
import { BASE_URL } from 'src/utils/constants';
import { formatLocalDate } from 'src/utils/format';

const FRACTION_DIGITS = 2;
export function DataTable() {
  const [page, setPage] = useState<SalePage>({
    first: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
    last: true,
  });

  useEffect(() => {
    axios.get<SalePage>(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className='table-responsive'>
      <table className='table table-striped table-sm'>
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>{formatLocalDate(sale.date, 'dd/MM/yyyy')}</td>
                <td>{sale.seller.name}</td>
                <td>{sale.visited}</td>
                <td>{sale.deals}</td>
                <td>{sale.amount.toFixed(FRACTION_DIGITS)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
