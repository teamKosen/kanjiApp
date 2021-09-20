import { FunctionComponent } from 'react';
import {useStyles} from './menu.style';

type Props={
    menu:any;
};

export const Menu:FunctionComponent<Props> = (props) => {
    const { menu } = props;
    const classes = useStyles();
    return (
        <div className={classes.menu}>
            <h2 className={classes.title}>メニュー</h2>
            <div className={classes.contents}>
                {menu.map((category) => (
                    <div key={category}>
                        <h3>{category.category}</h3>
                        {category.cuisine.map((cuisine) => (
                            <div key={cuisine.name}>
                                {cuisine.name} {cuisine.price}円
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};