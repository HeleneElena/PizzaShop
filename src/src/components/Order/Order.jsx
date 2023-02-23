import s from './Order.module.css';
import classNames from 'classnames';
import { OrderGoods } from '../OrderGoods/OrderGoods';

const orderList = ["Жгучий перец", "Горячий хотдог", "Мясная бомба"];

export const Order = () => {
    return (
        <div className={classNames(s.catalog__order, s.order)}> 
        <section className={s.wrapper}>
            <div className={s.header} tabIndex="0" role="button">
            <h2 className={s.title}>Корзина</h2>

            <span className={s.count}>4</span>
            </div>

            <div className={s.wrap_list}>
                {/* list */}
            <ul className={s.list}>
                {
                    orderList.map((el, i) => {
                        return <OrderGoods key={i} title={el} />
                    })
                }
            </ul>

            <div className={s.total}>
                <p>Итого</p>
                <p>
                <span className={s.amount}>1279</span>
                <span className={s.currency}>₽</span>
                </p>
            </div>

            <button className={s.submit}>Оформить заказ</button>

            <div className={s.apeal}>
                <p className={s.text}>Бесплатная доставка</p>
                <button className={s.close}>Свернуть</button>
            </div>
            </div>
        </section>
        </div>
    );
};