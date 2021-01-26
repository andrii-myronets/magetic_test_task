import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getCards} from '../store/cards/operations.js';



export const Campaigns = () => {
    const campaigns = [
        {
            dataClick: "4b20aa37-9e1a-4155-82e0-386d171cb1f0",
            name: "PETS"
        },
        {
            dataClick: "b0e78282-d457-4790-97f0-d5c0642bee4d",
            name: "FOOD"
        },
        {
            dataClick: "10a827d5-13b5-4cd6-a2d0-9f22dd7738d1",
            name: "PLANTS"
        }
    ];
    const [title, setTitle] = useState('PETS');
    const dispatch = useDispatch();
    const handler = (item) => {
        dispatch(getCards(item.dataClick));
        setTitle(item.name)
    } 
    return (
        <>
            <h1 className="campaign-title">
                {title}
            </h1>
            <section className="campaigns">
                {campaigns.map(item =>
                    <div className="campaign-wrapper" key={item.dataClick}>
                        <span className="button" onClick={()=>handler(item)}>
                            {item.name}
                        </span>
                    </div>
                )}
            </section>
        </>
    )
}