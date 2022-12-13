import style from './Location.module.scss';
import foto1 from '../../image/SwipeItem1.jpg';
import foto2 from '../../image/SwipeItem2.jpg';
import foto3 from '../../image/Img3.jpg';
import foto4 from '../../image/Img4.jpg';

export const Location = () => {
    return (
        <div className={style.wrapper}> 
          <h2>рекомендуемые локации</h2>
          <div className={style.wrap}>
            <h3>места куда вам захочется вернуться :) </h3>
            <input
                className={style.input}
                type='text'
                placeholder='отыщи свой уголок...'
            ></input>
           <svg className={style.svg} version="1.1" id="Capa_1" 
                 viewBox="0 0 612.01 612.01">
                <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
                    C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
                    l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
                    c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
                    S377.82,467.8,257.493,467.8z"/>
            </svg>
          </div>

          <div className={style.wrapper}>
            <img src={foto1} alt='foto location' />
            <img src={foto2} alt='foto location' />
            <img src={foto3} alt='foto location' />
            <img src={foto4} alt='foto location' />
          </div >
        </div>
    );
};