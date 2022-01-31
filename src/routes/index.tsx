import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import Editar from '../pages/editar';
import Chamada from '../pages/chamada';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Chamada} />
            <Route path="/editar" component={Editar} />
        </Switch>
    );
}

export default Routes;