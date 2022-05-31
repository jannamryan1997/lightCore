import { React } from 'react';

import { AddDefiShild, Header, DefiCard } from '../../../Components';

export function DeFiShield() {
    return (
        <>
            <Header title={'DeFi Shield'} />
            <main className="main">
                <div className="content">
                    <div className="row">
                        {/* <!--Todo react-circular-progressbar  https://www.npmjs.com/package/react-circular-progressbar--> */}
                        <DefiCard />
                    </div>
                </div>
                <AddDefiShild />
            </main>
        </>
    )
}