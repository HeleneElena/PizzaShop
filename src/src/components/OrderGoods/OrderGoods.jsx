import burger1 from '../../assets/img/burger_1.jpg';
import { Count } from '../Count/Count';
import s from './OrderGoods.module.css';

export const OrderGoods = (props) => {
    return (
         <li className={s.item}>
            <img className={s.image} src={burger1} alt={props.title} />

            <div className={s.goods}>
                <h3 className={s.goods__title}>{props.title}</h3>

                <p className={s.goods__weight}>512г</p>

                <p className={s.goods__price}>1279
                <span className="currency">₽</span>
                </p>
            </div>
            <Count count={1} />
            
        </li>
    )
}