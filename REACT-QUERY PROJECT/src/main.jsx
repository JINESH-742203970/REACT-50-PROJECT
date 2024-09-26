import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import{QueryClient,QueryClientProvider} from 'react-query';
import Product from './Product.jsx';
import{ReactQueryDevTools} from "@tanstack/react-query-devtools"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/products',
        element: <Product />,
    },
    {
        path: '/products/:productId',
        element: <Product />,
    },
]);
const queryClient=new QueryClient({
    defaultOptions:{
        queries:{
            staleTime:10000,
        },
    },
});
ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevTools initialIsOpen={false}/>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
