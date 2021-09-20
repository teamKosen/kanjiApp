import React, {FunctionComponent } from 'react'
import { Box,Typography }from '@material-ui/core';

type Props = {
    children?: React.ReactNode;
    index: any;
    value: any;
}


export const TabPanel:FunctionComponent<Props> = (props) => {
    const { children, value, index, ...other } = props;
    return(
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
};