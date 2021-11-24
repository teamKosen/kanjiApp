import React, { FunctionComponent } from 'react'
import { useStyles } from './prev-arrow.style'

type Props = {
    handleProcessDown: () => void
}

export const PrevArrow:FunctionComponent<Props> = (props) => {
    const { handleProcessDown } = props;
    const classes = useStyles();

    return (
        <div className={classes.prevButton} onClick={handleProcessDown}>
            ＜戻る
        </div>
    )
}