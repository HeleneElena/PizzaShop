import s from './Order.module.css';
import burger1 from '../../assets/img/burger_1.jpg';
import classNames from 'classnames';

export const Order = () => {
    return (
        <div className={classNames(s.catalog__order, s.order)}> 
        <section className={s.order__wrapper}>
            <div className={s.order__header} tabindex="0" role="button">
            <h2 className={s.order__title}>Корзина</h2>

            <span className={s.order__count}>4</span>
            </div>

            <div className={s.order__wrap_list}>
                {/* list */}
            <ul className={s.order__list}>
                <li className={s.order__item}>
                <img className={s.order__image} src={burger1} alt="Супер сырный" />

                <div className={classNames(s.order__goods, s.goods)}>
                    <h3 className={s.goods__title}>Супер сырный</h3>

                    <p className={s.goods__weight}>512г</p>

                    <p className={s.goods__price}>1279
                    <span className={s.currency}>₽</span>
                    </p>
                </div>

                <div className={s.count}>
                    <button className={s.count__minus}>-</button>
                    <p className={s.count__amount}>1</p>
                    <button className={s.count__plus}>+</button>
                </div>
                </li>

            </ul>

            <div className={s.order__total}>
                <p>Итого</p>
                <p>
                <span className={s.order__amount}>1279</span>
                <span className={s.currency}>₽</span>
                </p>
            </div>

            <button className={s.order__submit}>Оформить заказ</button>

            <div className={s.order__apeal}>
                <p className={s.order__text}>Бесплатная доставка</p>
                <button className={s.order__close}>Свернуть</button>
            </div>
            </div>
        </section>
        </div>
    );
};