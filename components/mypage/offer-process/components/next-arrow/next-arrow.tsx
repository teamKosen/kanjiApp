import React, { FunctionComponent } from 'react'
import { useStyles } from './next-arrow.style'

type Props = {
    handleProcessUP: () => void
}

export const NextArrow:FunctionComponent<Props> = (props) => {
    const { handleProcessUP } = props;
    const classes = useStyles();

    return (
        <div className={classes.nextButton} onClick={handleProcessUP}>
            次へ＞
        </div>
    )
}