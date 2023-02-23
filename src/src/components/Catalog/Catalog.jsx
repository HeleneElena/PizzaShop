import s from './Catalog.module.css';
import { Container } from '../Container/Container';
import { Order } from '../Order/Order';
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export const Catalog = () => {
    return (
        <section className={s.catalog}>
            <Container className={s.container}>
                <Order />
                <div class={s.wrapper}>
                    <h2 className={s.title}>Бургеры</h2>

                    <div className={s.wrap_list}>
                        <ul className={s.list}>
                        
                            {
                                goodsList.map((el, i) => (
                                    <li className={s.item} key={i} >
                                        <CatalogProduct title={el.title} />
                                    </li>
                                ))
                            }
                            
                        

                        </ul>
                    </div>
                </div>
            </Container>   
        </section>
    );
};