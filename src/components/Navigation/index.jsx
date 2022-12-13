import style from './Navigation.module.scss';

export const Navigation = () => {
    return (
        <div className={style.wrapper}> 
            <a className={style.nav} href="/events">События</a>
            <a className={style.nav} href="/lokacions">Локации</a>
            <a className={style.nav} href="/roads">Маршруты</a>
            <a className={style.nav} href="/holiday">Отдых</a>
        </div>
    );
};