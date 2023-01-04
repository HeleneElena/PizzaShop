import style from './Navigation.module.scss';

export const Navigation = () => {

    const MENU = [
        { id: 1, value: 'События', link: 'events' },
        { id: 2, value: 'Локации', link: 'locations' },
        { id: 3, value: 'Маршруты', link: 'routes' },
        { id: 4, value: 'Отдых', link: 'rest' },
    ];

    return (
        <div className={style.wrapper}> 
            {
                MENU.map((el, index) => {
                return (
                    <li key={index} className={style.nav}>
                        <a href={`#${el.link}`}>{el.value}</a>
                        </li>
                );
                })
            }
        </div>
    );
};