import style from './LocationPage1.module.scss';
import loc1 from '../../image/loc1.jpg';
import loc2 from '../../image/loc2.jpg';
import loc3 from '../../image/loc3.jpg';

export const LocationPage1 = () => {
    const LOCATIONS = [
        {id: 1, img: loc1, title: 'Скейт парк', time: 'с 9:00 до 19:00', text: 'Самый крутой скейт парк в городе. Приходите, не пожалеете!'},
        {id: 2, img: loc2, title: 'Атамань, выставочный комплекс', time: 'с 9:00 до 19:00', text: 'Самый большой в городе выставочный комплекс, там много проходит интересных и полезных выставок'},
        {id: 3, img: loc3, title: 'Музей истории СК ЖД', time: 'с 9:00 до 19:00', text: 'Очень интересный музей, были там два раза с детьми, им некогда было скучать! И покушать есть где и туалет тоже'},
    ];

    return ( 
        <> 
            <div className={style.container}> 
                <h2>Топ локаций</h2>
                {
                    LOCATIONS.map((obj) => {
                        return ( 
                            <div className={style.wrapper}>
                                <div className={style.image}>
                                    <img key={obj.id} className={style.foto} src={obj.img} alt="foto von location" />
                                </div>
                                <div className={style.content}>
                                    <h3 className={style.title}>{obj.title}</h3>
                                    <p className={style.time}>Время работы: {obj.time}</p>
                                    <p className={style.text}>{obj.text}</p>
                                </div>
                            </div>
                    )})
                }
            </div>
            <p className={style.will}>Здесь сделать бесконечную прокрутку! и написать на питоне бэк базу или лучше парсер</p>
            <p className={style.will}>Плюс сделать печеньки, чтобы вернуться назад на главную страницу</p>
        </>
    );
};
