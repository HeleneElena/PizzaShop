import s from './Count.module.css';

export const Count = (props) => {
    return (
        <div className={s.count}>
            <button className={s.minus}>-</button>
            <p className={s.amount}>{props.count}</p>
            <button className={s.plus}>+</button>
        </div>
    );
};