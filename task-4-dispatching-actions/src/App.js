import React from "react";
import { connect } from "react-redux";

import styles from './App.module.css'

const App = props => {
    const deleteItem = (ev, id) => {
        ev.preventDefault()
        props.appDeleteItem(id)
    }

    return (
        <div className={styles.App}>
            <div className={styles.Div}>Counter: {props.appCounter}</div>
            <div className={styles.Btn} onClick={props.appIncrement}>increment</div>
            <div className={styles.Btn} onClick={props.appDecrement}>decrement</div>
            <div className={styles.Btn} onClick={() => props.appAdd(10)}>add 10</div>
            <div className={styles.Btn} onClick={() => props.appSub(3)}>sub 3</div>

            <div className={styles.Btn} onClick={props.appStore}>store</div>
            <div className={styles.Btn} onClick={props.appDelete}>delete</div>

            <div className={styles.History}>
                {
                    props.appHistory.map(item => (<div
                                                    key={item.id}
                                                    onClick={(ev => deleteItem(ev, item.id))}
                                                    className={styles.HistoryItem}
                                                  >{item.value}</div>))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        appCounter: state.counter,
        appHistory: state.history
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        appIncrement: () => dispatch({ type: "INCREMENT" }),
        appDecrement: () => dispatch({ type: "DECREMENT" }),
        appAdd: (value) => dispatch({ type: "ADD", payload: value }),
        appSub: (value) => dispatch({ type: "SUB", payload: value }),
        appStore: () => dispatch({ type: "STORE" }),
        appDelete: () => dispatch({ type: "DELETE" }),
        appDeleteItem: (id) => dispatch({ type: "DELETE_ITEM", payload: { id } })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
