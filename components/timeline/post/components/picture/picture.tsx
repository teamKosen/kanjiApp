import { FunctionComponent } from 'react';
import {useStyles} from './picture.style';

type Props={
    pictures:string;
};

export const Picture = (props) => {
    const { pictures } = props;
    var i:Boolean=true;
    const classes = useStyles();
    return (
        <div className={classes.imgPosition}>
            {pictures.map((picture) => {
                if(i){
                    i=false;
                    return(<img key={picture.picturePath} src={picture.picturePath} className={classes.imgSize}/>)
                }
                else{}
            })}            
        </div>
    );
};