import React from "react";
import MenuSection from "../../Components/MenuSection";
import menuBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupdBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import { Helmet } from "react-helmet";

function Menu() {
  const menu = useMenu();
  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>
      <MenuSection
        cover={menuBg}
        title="Our Menu"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
      />
      <MenuSection
        cover={dessertBg}
        title="Dessert"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
        menu={dessert}
      />
      <MenuSection
        cover={pizzaBg}
        title="Pizza"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
        menu={pizza}
      />
      <MenuSection
        cover={saladBg}
        title="Salad"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
        menu={salad}
      />
      <MenuSection
        cover={soupdBg}
        title="Soup"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
        menu={soup}
      />
    </div>
  );
}

export default Menu;
