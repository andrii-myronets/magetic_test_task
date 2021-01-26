import React from 'react';
import { useSelector } from 'react-redux';
import { selectCards } from '../store/cards/selectors';


export const Cards = () => {
    const cards = useSelector(selectCards);

    return (
        <main className="page-wrapper">
            {cards.length > 0 && cards.map((item, index) =>
                <section key={index}>
                    <div className="card-block ">
                        <div className="card__image">
                            <img src={item.image} alt={item.title} />
                        </div>

                        <div className="card__info">
                            <h3>
                                {item.title}
                            </h3>

                            <input type="checkbox" name="trigger" id={"trigger"+index+1} />
                            <label className="trigger-arrow" htmlFor={"trigger"+index+1}>
                                <span></span>
                            </label>

                            <div className="card__info__extra">
                                <p>
                                    {item.description}
                                </p>

                                <div className="card__action">
                                    <a className="button">
                                        Go for it!
                            </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>)
            }
        </main>
    )
}