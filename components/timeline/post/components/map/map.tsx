import { FunctionComponent } from 'react';
import {useStyles} from './map.style.ts';

export const Map = () => {
    const classes = useStyles();
    return (
        <div className={classes.map}>
            <h2 className={classes.title}>地図</h2>
             <img src="./asset/map_data.jpeg" className={classes.contents} alt = "map_data"/>
        </div>
    );
};