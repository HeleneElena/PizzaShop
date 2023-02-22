import s from './Catalog.module.css';
import photo5 from '../../assets/img/photo-5.jpg';

export const Catalog = () => {
    return (
         <div className={s.catalog__wrapper}>
            <h2 className={s.catalog__title}>Бургеры</h2>

            <div className={s.catalog__wrap_list}>
                <ul className={s.catalog__list}>
                <li className={s.catalog__item}>
                    <article className={s.product}>
                        <img className={s.product__image} src={photo5} alt="Мясная бомба" />

                        <p className={s.product__price}>689 <span className={s.currency}>₽</span></p>

                        <h3 className={s.product__title}>
                            <button className={s.product__detail}>Мясная бомба</button>
                        </h3>

                        <p className={s.product__weight}>520 г</p>

                        <button className={s.product__add} type="button">Добавить</button>
                    </article>
                </li>

                </ul>
            </div>
    </div>
    );
};