import {DirectoryContainer} from "../directory-category/directory-category.styles";

import { DirectoryItem } from "../directory-item/directory-item";

export const DirectoryCategory = () => {

  const categories = [
    {id: 1, title:"Chapéus", imageUrl:"https://i.ibb.co/cvpntL1/hats.png", route: "shop/chapéus"},
    {id: 2, title:"Jaquetas", imageUrl:"https://i.ibb.co/px2tCc3/jackets.png", route: "shop/casacos"},
    {id: 3, title:"Tênis", imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png", route: "shop/tênis"},
    {id: 4, title:"Mulheres", imageUrl:"https://i.ibb.co/GCCdy8t/womens.png", route: "shop/mulheres"},
    {id: 5, title:"Homens", imageUrl:"https://i.ibb.co/R70vBrQ/men.png", route: "shop/homens"},
  ]

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </DirectoryContainer>
  );
}