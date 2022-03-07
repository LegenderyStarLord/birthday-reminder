import React from "react";
import classes from "./App.module.css"
import ListContainer from "./ListContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store"

function App() {
    return (
        <div>
            <div className={classes.main}>
                <section className={classes.container}>
                    <Provider store={store}>
                        <ListContainer/>
                    </Provider>
                </section>
            </div>
            <footer className={classes.footer}>Horbachenko Vlad 2022</footer>
        </div>
    );
}

export default App;
