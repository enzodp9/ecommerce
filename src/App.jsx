import { Component } from 'react';
import AppRoutes from './AppRoutes';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {

    render() {
        return (
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        )
    }
}
