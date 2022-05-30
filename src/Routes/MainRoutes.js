import { React } from "react";
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { Main,WalletsShield } from '../Pages/index';

export function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="/" element={<Navigate  to="/wallet-shield"/>}/>
                    <Route path="/wallet-shield" element={<WalletsShield />} />
                </Route>
            </Routes>

        </BrowserRouter>

    )
}

export default MainRoutes;