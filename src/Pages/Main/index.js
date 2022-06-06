import { React } from 'react';

import { Outlet } from 'react-router-dom';

import {Sider} from '../../Components';


export function Main() {
    return (
        <div className="wrapper">
        
            <>
                <Sider />
            </>
            <Outlet />
        </div>
    )
}