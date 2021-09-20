import { OfferTab } from "./components/offer-tab/offer-tab"
import { ChatTab } from "./components/chat-tab/chat-tab"
import React, { useState, useEffect,FunctionComponent, useCallback } from 'react'
import { Tabs, Tab,AppBar} from '@material-ui/core'
import { TabPanel } from "./components/tabPanel/tabPanel"

export const Chat:FunctionComponent = () => {
    const [value, setValue] = useState(0);


    // const a11yProps = useCallback((index) => {
    //     return {
    //         id: `simple-tab-${index}`,
    //         'aria-controls': `simple-tabpanel-${index}`,
    //       };
    // },[]);

    const a11yProps = (index) => {
        console.log(index);
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
          };
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static" color="inherit">
                <Tabs 
                    value={value} 
                    onChange={handleChange}  
                    indicatorColor="primary" 
                    aria-label="simple tabs example"
                >
                    <Tab label="チャット" {...a11yProps(0)} />
                    <Tab label="オファー" {...a11yProps(1)} />
                    <Tab label="取引画面" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ChatTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <OfferTab />
            </TabPanel>
        </div>
    )
}