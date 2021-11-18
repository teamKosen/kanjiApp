import React, { useState,useEffect,FunctionComponent } from 'react'
import { useStyles } from './process-bar.style'

type Props = {
    width: number;
    percent: number;
}
export const ProcessBar:FunctionComponent<Props> = (props) => {
    const { width, percent } = props;
    const [progress, setProgress] = useState<number>(0);
    const classes = useStyles();

    useEffect(() => {
        setProgress(width * percent)
    },[width,percent])

    return (
        <div>
            <div className={classes.progressBackground} style={{width: width}}>
                <div style={{width: `${progress}px`}} className={classes.progress} />
            </div>
            <p className={classes.test}>こんちは</p>
        </div>
    )
}