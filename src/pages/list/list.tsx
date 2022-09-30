import { DataTable, Navbar, Sidebar } from '../../components';
import './list.scss';

export function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
}
