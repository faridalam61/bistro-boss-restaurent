import React from "react";
import MenuSection from "../../Components/MenuSection";
import menuBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupdBg from "../../assets/menu/soup-bg.jpg";

function Menu() {
  return (
    <div>
      <MenuSection
        cover={menuBg}
        title="Our Menu"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
      />
      <MenuSection
        cover={dessertBg}
        title="Dessert"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
      />
      <MenuSection
        cover={pizzaBg}
        title="Pizza"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
      />
      <MenuSection
        cover={saladBg}
        title="Salad"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
      />
      <MenuSection
        cover={soupdBg}
        title="Soup"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nam eius esse a, libero sed voluptatum nisi quae aperiam repudiandae!"
      />
    </div>
  );
}

export default Menu;
