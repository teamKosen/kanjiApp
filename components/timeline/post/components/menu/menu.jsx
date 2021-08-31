import style from './menu.module.scss'

export const Menu = (props) => {
    const { menu } = props;
    return (
        <div className={style.menu}>
            <h2 className={style.title}>メニュー</h2>
            <div className={style.contents}>
                {menu.map((category) => (
                    <div key={category}>
                        <h3>{category.category}</h3>
                        {category.cuisine.map((cuisine) => (
                            <div>
                                {cuisine.name} {cuisine.price}円
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};