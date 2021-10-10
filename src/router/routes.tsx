import { Route, Switch } from 'react-router-dom';

import Home from '../components/pages/home';
import Villages from '../components/pages/villages';

export const Path = {
    home: "/",
    villages: "/villages",
}

const routes = (
    <Switch>
        <Route exact path={Path.home} component={Home} />
        <Route exact path={Path.villages} component={Villages} />
    </Switch>
);

export default routes;
