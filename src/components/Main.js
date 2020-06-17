import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Roster from './Roster';
import Events from './Events';
import Apply from './Apply';
import Footer from './Footer';

class Main extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/roster" component={Roster} />
                    <Route path="/events" component={Events} />
                    <Route path="/apply" component={Apply} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default withRouter(Main);
