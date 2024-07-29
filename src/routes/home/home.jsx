import { DirectoryCategory } from "../../components/directory-category/directory-category";  // Importa o componente DirectoryCategory para renderizar categorias
import { Outlet } from "react-router-dom"; // Importa o componente Outlet do react-router-dom para renderizar o conteúdo da rota atual

export const Home = () => {
  return (
    <div>
      <DirectoryCategory/>
      <Outlet/> 
    </div>
  );
}