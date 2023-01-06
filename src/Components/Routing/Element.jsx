import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Personal from '../Work/Personal/Personal';
import Professional from '../Work/Professional/Professional';
import Work from '../Work/Work';
import EmptyHome from './EmptyHome';

function Element() {

    const routes = useRoutes([
        {
            path: '/',
            element: <EmptyHome />,
            children: [
                {
                    path: '',
                    element: <Navigate replace to="home" />
                },
                {
                    path: '/home',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/work',
                    element: <Work />,
                    children: [
                        {
                            path: '',
                            element: <Navigate replace to='personal' />,
                        },
                        {
                            path: 'personal',
                            element: <Personal />,
                        },
                        {
                            path: 'professional',
                            element: <Professional />
                        },
                    ]
                },
                {
                    path: '/contact',
                    element: <Contact />
                }
            ]
        }
    ]);

    return routes;
}

export default Element;
