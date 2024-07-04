import React from 'react';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import Characters from './pages/Characters.tsx';
import Comics from './pages/Comics.tsx';
import CharacterDetails from './pages/CharacterDetails.tsx';
import ComicDetails from './pages/ComicDetails.tsx';

const App = () => {
    const routes = useRoutes([
        { path: "/", element: <Characters /> },
        { path: "/comics", element: <Comics /> },
        { path: "/characters/:id", element: <CharacterDetails /> },
        { path: "/comics/:id", element: <ComicDetails /> }
    ]);

    return (
        <>
            <main>{routes}</main>
        </>
    );
};

const WrappedApp = () => (
    <Router>
        <App />
    </Router>
);

export default WrappedApp;
