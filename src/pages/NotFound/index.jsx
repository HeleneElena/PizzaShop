import style from './NotFound.module.scss';

export const NotFound = () => {
    return (
        <div className={style.root}>
           <h1>
        <span>😕</span>
            <br />
            Ничего не найдено
        </h1>
        <p className={style.description}>
            К сожалению данная страница еще в разработке
        </p>
        </div>
    );
};

