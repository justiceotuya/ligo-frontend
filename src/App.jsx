import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { Home } from './pages/home';
import { Signup } from './pages/signup';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
