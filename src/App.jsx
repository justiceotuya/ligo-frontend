import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { Home } from './pages/home';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Home />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
