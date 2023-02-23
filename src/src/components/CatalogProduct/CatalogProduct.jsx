import photo5 from '../../assets/img/photo-5.jpg';
import s from './CatalogProduct.module.css';

export const CatalogProduct = (props) => {
    return (
        <article className={s.product}>
            <img className={s.product__image} src={photo5} alt={props.title} />

            <p className={s.product__price}>689 <span className="currency">₽</span></p>

            <h3 className={s.product__title}>
                <button className={s.product__detail}>{props.title}</button>
            </h3>

            <p className={s.product__weight}>520 г</p>

            <button className={s.product__add} type="button">Добавить</button>
        </article>
    );
};