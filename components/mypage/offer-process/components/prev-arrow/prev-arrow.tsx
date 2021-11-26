import React, { FunctionComponent } from 'react'
import { useStyles } from './prev-arrow.style'

type Props = {
    handleProcessDown: () => void;
    currentProcess: number;
}

export const PrevArrow:FunctionComponent<Props> = (props) => {
    const { handleProcessDown,currentProcess } = props;
    const classes = useStyles();

    return (
        <div>
            { currentProcess !== 1
                ? <div className={classes.prevButton} onClick={handleProcessDown}>
                    ＜戻る
                 </div>
                 : ""
            }
        </div>
    )
}