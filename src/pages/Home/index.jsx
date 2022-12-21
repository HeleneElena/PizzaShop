import { Navigation } from '../../components/Navigation';
import { Events } from '../../components/Events';
import { Location } from '../../components/Location';

export const Home = () => {

    return (
        <div className="content">
            <Navigation />
            <Events />
            <Location />
        </div>
    );
};
