import { DataTable, Navbar, Sidebar } from '../../components';
import './list.scss';

interface IDataProps {
  title: string;
}

export function List({ title }: IDataProps) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable title={title} />
      </div>
    </div>
  );
}
