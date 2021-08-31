import { FunctionComponent } from 'react';
import {useStyles} from './user-comment.style.ts';

type Props={
    comment:any;
};

export const UserComment:FunctionComponent<Props> = (props) => {
    const {comment}=props;
    const classes = useStyles();
    return (
        <div className={classes.userComment}>
            <h2 className={classes.title}>利用者のコメント</h2>
            <div className={classes.comment}>
            {comment.map((commentdata) =>{ 
                /* const cmnt=commentlist.find((v)=>v._id==shopdata._id); */
                return  <div key={commentdata.name}>
                    <h3><u >{commentdata.name}さんのコメント</u></h3>
                    <p>{commentdata.comment}</p>
                </div>
                 })}
                
            </div>
        </div>
    );
};