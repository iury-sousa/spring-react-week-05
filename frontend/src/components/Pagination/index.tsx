import { SalePage } from 'src/types/sale';

type Props = {
  page: SalePage;
  onPageChange: (index: number) => void;
};
export function Pagination({ page, onPageChange }: Props) {
  return (
    <div className='row d-flex justify-content-center'>
      <nav>
        <ul className='pagination justify-content-center'>
          <li className={`page-item ${page.first ? 'disabled' : ''}`}>
            <button className='page-link' onClick={() => onPageChange(--page.number)}>
              Anterior
            </button>
          </li>
          <li className='page-item'>
            <button className='page-link'>{page.number + 1}</button>
          </li>
          <li className={`page-item ${page.last ? 'disabled' : ''}`}>
            <button className='page-link' onClick={() => onPageChange(++page.number)}>
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
