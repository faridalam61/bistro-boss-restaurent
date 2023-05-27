import React from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuSection from "../../Components/MenuSection";
import menuBg from "../../assets/menu/banner3.jpg";
import { useParams } from "react-router-dom";
import ProductCard from "../Order/ProductCard";
import useMenu from "../../Hooks/useMenu";
import { Helmet } from "react-helmet";

function Order() {
  const menu = useMenu();
  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const drinks = menu.filter((item) => item.category == "drinks");
  console.log(menu);

  const tabs = ["Salad", "Pizza", "Soup", "Dessert", "Drinks"];
  const id = useParams().id;
  const activeTab = tabs.indexOf(id);
  console.log(activeTab);
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Order</title>
      </Helmet>
      <MenuSection
        cover={menuBg}
        title="Order"
        description="Would you like to try a dish?
                "
      />

      <div className="container mx-auto mb-10">
        <Tabs defaultIndex={activeTab}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
              {salad.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
              {pizza.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
              {soup.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
              {dessert.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
              {drinks.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Order;
