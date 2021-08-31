import { FunctionComponent } from 'react';
import {useStyles} from './picture.style.ts';

type Props={
    pictures:string;
};

export const Picture = (props) => {
    const { pictures } = props;
    const classes = useStyles();
    return (
        <div className={classes.imgPosition}>
            {pictures.map((picture)=>(
                <img key={picture.picturePath} src={picture.picturePath} className={classes.imgSize}/>
            ))}
        </div>
    );
};