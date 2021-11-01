import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './About';
import Error from './Error';
import Home from './Home';
import NavBar from './Navbar';
import People from './People';
import Person from './Person';

const ReactRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route path='/about'>
                    <About />
                </Route>

                <Route path='/people'>
                    <People />
                </Route>

                <Route path='/person/:id' children={<Person />}></Route>

                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouter;