import React from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Personal from '../Pages/Work/Personal/Personal';
import Professional from '../Pages/Work/Professional/Professional';
import Work from '../Pages/Work/Work';

function Routes() {

    const routes = useRoutes([
        {
            path: '/',
            element: <Outlet />,
            children: [
                {
                    path: '',
                    element: <Navigate replace to='home' />
                },
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'work',
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
                    path: 'contact',
                    element: <Contact />
                }
            ]
        }
    ]);

    return routes;
}

export default Routes;
