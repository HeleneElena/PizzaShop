import classNames from 'classnames';
import s from './Container.module.css';

export const Container = ({ className }) => {
    
    return (
        <div className={classNames(s.container, className)}></div>
    );
};