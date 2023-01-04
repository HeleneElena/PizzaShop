import style from './Events.module.scss';
import eventBack from '../../image/events_bg.jpg';

export const Events = () => {

    return (
        <div className={style.wrapper}>
            <img src={eventBack} alt='events' width={1850} />
            <h2 className={style.title}>главные события этой недели</h2>
        </div>
    );
};