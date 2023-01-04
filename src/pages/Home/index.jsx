import { Navigation } from '../../components/Navigation';
import { Events } from '../../components/Events';
import { Location } from '../../components/Location';
import { Travel } from '../../components/Travel';

export const Home = () => {

    return (
        <div className="content">
            <Navigation />
            <Events />
            <Location />
            <Travel />
        </div>
    );
};
