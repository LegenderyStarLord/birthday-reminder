import React from "react";
import classes from "./App.module.css";

function List({birthdayData, changeDate, newDate}) {

    let onDateChange = (value) => {
        changeDate(value);
    };

    let onInputChange = (e) => {
        let text = e.target.value;
        onDateChange(text);
    };

    let x = 0;

    birthdayData.forEach(person => {
        const {birthday} = person;
        if (birthday === Number(newDate)) {
            x += 1
        }
    });

    return (
        <>
            <h3> {x} BIRTHDAYS TODAY</h3>
            <section>
                {birthdayData.map(person => {
                    const {id, birthday, name, age, image} = person;
                    return (
                        birthday === Number(newDate) &&
                        <article key={id} className={classes.person}>
                            <img src={image} alt={name}/>
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                        </article>
                    )
                })}
            </section>
            <section className={classes.dateSection}>
                <span>Enter a date from 7 to 9:</span>
                <input onChange={e => onInputChange(e)} value={newDate}/>
            </section>
        </>
    )
}

export default List;