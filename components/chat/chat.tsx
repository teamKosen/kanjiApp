import { useStyles } from "./chat.style";
import { OfferTab } from "./components/offer-tab/offer-tab"
import { PlanDetail } from "./components/plandetail/plandetail"
import { ChatTab } from "./components/chat-tab/chat-tab"
import React, { useState,FunctionComponent } from 'react'
import { Tabs, Tab,AppBar} from '@material-ui/core'
import { TabPanel } from "./components/tabPanel/tabPanel"

type Props = {
    userPlandatas: JSON;
    userPlandatas_detail: JSON;
}

export const Chat:FunctionComponent<Props> = (props) => {
    const { userPlandatas , userPlandatas_detail} = props;
    const [value, setValue] = useState(0);
    const style = useStyles();

    const a11yProps = (index) => {
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
                {/* <ChatTab /> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={style.offer}>
                    <div className={style.plandetail}>
                        <PlanDetail userPlandatas_detail={userPlandatas_detail}/>
                    </div>
                    <div className={style.offertab}>
                        <OfferTab userPlandatas={userPlandatas}/>
                    </div>
                </div>
            </TabPanel>
        </div>
    )
}