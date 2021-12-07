import { FunctionComponent } from 'react';
import {useStyles} from './picture.style';

type Props={
    pictures:pct_obj[];
};
type pct_obj={
    _id:Object;
    ShopId:string;
    picturePath:string;
}
export const Picture:FunctionComponent<Props>=(props)=>{
    const { pictures } = props;
    var i:Boolean=true;
    const classes = useStyles();
    return (
        <div className={classes.imgPosition}>
            {pictures.map((picture) => {
                if(i){
                    i=false;
                    return(<img key={picture.picturePath} src={picture.picturePath} style={{width: "250px",height: "250px"}}/>)
                }
                else{}
            })}            
        </div>
    );
}

// export const Picture = (props) => {
//     const { pictures } = props;
//     var i:Boolean=true;
//     const classes = useStyles();
//     return (
//         <div className={classes.imgPosition}>
//             {pictures.map((picture) => {
//                 if(i){
//                     i=false;
//                     console.log(picture.picturePath);
//                     return(<img key={picture.picturePath} src={picture.picturePath} className={classes.imgSize}/>)
//                 }
//                 else{}
//             })}            
//         </div>
//     );
// };