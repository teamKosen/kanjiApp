import React, { FunctionComponent } from 'react'
import { useStyles } from './next-arrow.style'

type Props = {
    handleProcessUP: () => void;
    currentProcess: number;
}

export const NextArrow:FunctionComponent<Props> = (props) => {
    const { handleProcessUP,currentProcess } = props;
    const classes = useStyles();

    return (
        <div>
            { currentProcess !== 3 
                ?  <div className={classes.nextButton} onClick={handleProcessUP}>
                        次へ＞
                    </div>
                : ""}
        </div>
    )
}