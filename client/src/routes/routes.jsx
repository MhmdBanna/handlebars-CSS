import React, { lazy, useContext, useState } from 'react';
import Loadable from '../components/loadable';

const Default = Loadable(lazy(() => import('../pages/Default')))


const Router = [
    {
        path: '/',
        element: <Default />,
        children: [
            { path: '/', exact: true, element: <Default /> },
        ],
    },
];

export default Router;
