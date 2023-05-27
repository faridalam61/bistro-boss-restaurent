import React from 'react'
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import MenuSection from '../../Components/MenuSection';
import menuBg from "../../assets/menu/banner3.jpg";


function Order() {
    return (
        <div>
            <MenuSection
                cover={menuBg}
                title="Order"
                description="Would you like to try a dish?
                "
            />

            <div className='container mx-auto mb-10'>

                <Tabs defaultIndex={1}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 5</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Order