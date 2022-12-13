import style from './Header.module.scss';
import bg from '../../image/header_bg.png';

export const Header = () => {
    return (
        <div className={style.header}>
        <div className={style.container}>
          <div className={style.header_text}>
            <h1 className={style.header_title}>КУДА СХОДИТЬ?</h1>
            <p className={style.header_p}>отдых, который подойдет именно Вам</p>
            <button className={style.header_btn}>Краснодар</button>
          </div>
          <div className={style.wrapper}>
            <div className={style.header_img}>
              <img src={bg} alt="header-background" />
            </div>

              <svg className={style.svg} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="#EEC3FD"/>
                <path d="M28.4426 28.443C30.519 28.392 32.2405 27.6831 33.6072 26.3164C34.9739 24.9498 35.6827 23.2282 35.7338 21.1519C35.6827 19.0755 34.9739 17.354 33.6072 15.9873C32.2405 14.6207 30.519 13.9118 28.4426 13.8608C26.3663 13.9118 24.6448 14.6207 23.2781 15.9873C21.9114 17.354 21.2025 19.0755 21.1515 21.1519C21.2025 23.2282 21.9114 24.9498 23.2781 26.3164C24.6448 27.6831 26.3663 28.392 28.4426 28.443ZM28.4426 30.8734C25.6833 30.7973 23.3923 29.8478 21.5695 28.025C19.7467 26.2022 18.7973 23.9112 18.7211 21.1519C18.7973 18.3926 19.7467 16.1016 21.5695 14.2788C23.3923 12.456 25.6833 11.5065 28.4426 11.4304C31.2019 11.5065 33.493 12.456 35.3157 14.2788C37.1385 16.1016 38.088 18.3926 38.1641 21.1519C38.088 23.9112 37.1385 26.2022 35.3157 28.025C33.493 29.8478 31.2019 30.7973 28.4426 30.8734ZM40.5945 43.0253V39.3797C40.5694 38.342 40.215 37.4812 39.5312 36.7975C38.8475 36.1137 37.9867 35.7593 36.949 35.7342H19.9363C18.8985 35.7593 18.0378 36.1137 17.354 36.7975C16.6703 37.4812 16.3158 38.342 16.2907 39.3797V43.0253C16.2907 43.3801 16.1769 43.6714 15.9493 43.899C15.7216 44.1267 15.4304 44.2405 15.0755 44.2405C14.7207 44.2405 14.4295 44.1267 14.2018 43.899C13.9742 43.6714 13.8604 43.3801 13.8604 43.0253V39.3797C13.9114 37.6582 14.5064 36.2279 15.6455 35.0889C16.7845 33.9499 18.2148 33.3548 19.9363 33.3038H36.949C38.6705 33.3548 40.1007 33.9499 41.2398 35.0889C42.3788 36.2279 42.9739 37.6582 43.0249 39.3797V43.0253C43.0249 43.3801 42.9111 43.6714 42.6834 43.899C42.4558 44.1267 42.1645 44.2405 41.8097 44.2405C41.4549 44.2405 41.1636 44.1267 40.936 43.899C40.7083 43.6714 40.5945 43.3801 40.5945 43.0253Z" fill="black"/>
              </svg>

              <svg className={style.svg_user} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="#EEC3FD"/>
                <path d="M14.667 17.3333C14.667 16.9797 14.8075 16.6406 15.0575 16.3905C15.3076 16.1405 15.6467 16 16.0003 16H40.0003C40.3539 16 40.6931 16.1405 40.9431 16.3905C41.1932 16.6406 41.3337 16.9797 41.3337 17.3333C41.3337 17.687 41.1932 18.0261 40.9431 18.2761C40.6931 18.5262 40.3539 18.6667 40.0003 18.6667H16.0003C15.6467 18.6667 15.3076 18.5262 15.0575 18.2761C14.8075 18.0261 14.667 17.687 14.667 17.3333ZM16.0003 29.3333H40.0003C40.3539 29.3333 40.6931 29.1929 40.9431 28.9428C41.1932 28.6928 41.3337 28.3536 41.3337 28C41.3337 27.6464 41.1932 27.3072 40.9431 27.0572C40.6931 26.8071 40.3539 26.6667 40.0003 26.6667H16.0003C15.6467 26.6667 15.3076 26.8071 15.0575 27.0572C14.8075 27.3072 14.667 27.6464 14.667 28C14.667 28.3536 14.8075 28.6928 15.0575 28.9428C15.3076 29.1929 15.6467 29.3333 16.0003 29.3333ZM16.0003 40H40.0003C40.3539 40 40.6931 39.8595 40.9431 39.6095C41.1932 39.3594 41.3337 39.0203 41.3337 38.6667C41.3337 38.313 41.1932 37.9739 40.9431 37.7239C40.6931 37.4738 40.3539 37.3333 40.0003 37.3333H16.0003C15.6467 37.3333 15.3076 37.4738 15.0575 37.7239C14.8075 37.9739 14.667 38.313 14.667 38.6667C14.667 39.0203 14.8075 39.3594 15.0575 39.6095C15.3076 39.8595 15.6467 40 16.0003 40Z" fill="black"/>
              </svg>
          </div>
        </div>
      </div>
    );
};

