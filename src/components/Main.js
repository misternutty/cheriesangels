// package components
import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// project components
import Header from './Header';
import Home from './Home';
import Roster from './Roster';
import Events from './Events';
import Apply from './Apply';
import Footer from './Footer';

// data
import { ROSTER } from '../data/rosterData';
import { EVENTS } from '../data/eventData';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roster: ROSTER,
            events: EVENTS,
        };
    }
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route
                        path="/roster"
                        render={() => (
                            <Roster rosterArray={this.state.roster} />
                        )}
                    />
                    <Route
                        path="/events"
                        render={() => <Events eventArray={this.state.events} />}
                    />
                    <Route path="/apply" component={Apply} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default withRouter(Main);
