import style from './Travel.module.scss';
import {ReactComponent as SearchSvg} from '../../image/search.svg';
import travel from '../../image/travel.jpg';
import travel1 from '../../image/travel1.jpg';
import travel2 from '../../image/travel2.jpg';
import { Link } from 'react-router-dom';

export const Travel = () => {
    return (
        <div className={style.container}>
            <h2>яркие маршруты</h2>
            <div className={style.search}>
                <p className={style.search_text}>которые стоит пройти</p>
                <input type="text" className={style.search_input} 
                    placeholder='отыщи свой путь' />
                <SearchSvg className={style.search_svg} />
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <p className={style.card_title}>Пеший</p>
                    <Link className={style.nav} to="/roads">
                        <img className={style.card_img} src={travel} alt="travel foto" />
                    </Link>
                </div>

                <div className={style.card}>
                    <p className={style.card_title}>Вело</p>
                    <Link className={style.nav} to="/roads">
                        <img className={style.card_img} src={travel1} alt="travel foto" />
                    </Link>
                    
                </div>

                <div className={style.card}>
                    <p className={style.card_title}>Авто</p>
                    <Link className={style.nav} to="/roads">
                        <img className={style.card_img} src={travel2} alt="travel foto" />
                    </Link>
                </div>
            </div>
        </div>
    );
};