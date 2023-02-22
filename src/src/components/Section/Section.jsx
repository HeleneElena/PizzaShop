import { Container } from "../Container/Container";
import s from './Section.module.css';
import { Order } from "../Order/Order";
import { Catalog } from "../Catalog/Catalog";

export const Section = () => {
    return (
        <section className={s.catalog}>
            <Container className={s.catalog__container}>
                <Order />
                <Catalog />
            </Container>
        </section>
    );
};