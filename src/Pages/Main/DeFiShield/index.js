import { React, useState } from 'react';

import { AddDefiShild, Header, DefiCard } from '../../../Components';

export function DeFiShield() {

    const [defiCard, setDefiCard] = useState([{ id: 1, title: 'cold' }, { id: 2, title: 'risk' }, { id: 3, title: 'risk' }])

    return (
        <>
            <Header title={'DeFi Shield'} />
            <main className="main">
                <div className="content">
                    <div className="row">
                        {/* <!--Todo react-circular-progressbar  https://www.npmjs.com/package/react-circular-progressbar--> */}
                        {
                            defiCard.map((element) => {
                                return <DefiCard key={element.id} element={element}/>
                            })
                        }

                    </div>
                </div>
                <AddDefiShild />
            </main>
        </>
    )
}