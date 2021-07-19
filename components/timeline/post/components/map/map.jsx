import style from './map.module.scss';

export const Map = () => {
    return (
        <div className={style.map}>
            <h2 className={style.title}>地図</h2>
             <img src="./asset/map_data.jpeg" className={style.contents} alt = "map_data"/>
        </div>
    );
};