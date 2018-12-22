import React from 'react';
import Navbar from '../Navbar';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({children}: ILayoutProps) => (
    <div>
        <Navbar/>
        {children}
    </div>
);

export default Layout;
