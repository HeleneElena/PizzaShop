import style from './Roads.module.scss';

export const Roads = () => {
    return (
        <div className={style.container}>
            <h2>яркие маршруты</h2>
            <div className={style.search}>
                <p className={style.search_text}>которые стоит пройти</p>
                <input type="text" className={style.search_input} 
                    placeholder='отыщи свой путь' />
            </div>
            <div className={style.cards}>
        
            </div>

        </div>
    );
};