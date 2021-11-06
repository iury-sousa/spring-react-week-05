import { DashboardPage, HomePage } from './pages';
import { BrowserRouter, Routes as SwitchRouters, Route } from 'react-router-dom';

export function Routes() {
  return (
    <BrowserRouter>
      <SwitchRouters>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </SwitchRouters>
    </BrowserRouter>
  );
}
