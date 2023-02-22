import s from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container';

export const Header = () => (
        <header className={s.header}>
            <Container>
                <div className={s.container}>
                    <img className={s.logo} src={logo} alt="Логотип YourMeal" />

                    <div className={s.wrapper}>
                        <h1 className={s.title}>
                        <span>Только самые</span>
                        <span className={s.red}>сочные бургеры!</span>
                        </h1>

                        <p className={s.appeal}>Бесплатная доставка от 599 ₽</p>
                    </div>
                </div>
            </Container>
        </header>
);