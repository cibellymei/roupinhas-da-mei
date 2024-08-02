import { Outlet } from 'react-router-dom';

import { Directory } from "../../components/directory-category/directory-category";

export const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};