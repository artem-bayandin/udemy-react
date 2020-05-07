import React from "react";
import { connect } from "react-redux";

import styles from './App.module.css'

import { increment, decrement, add, sub, store, del, delItem } from './store/actions/actions'

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

            <div className={styles.Btn} onClick={() => props.appStore(props.appCounter)}>store</div>
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
        appCounter: state.counterSection.counter,
        appHistory: state.resultsSection.history
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        appIncrement: () => dispatch(increment()),
        appDecrement: () => dispatch(decrement()),
        appAdd: (value) => dispatch(add(value)),
        appSub: (value) => dispatch(sub(value)),
        appStore: (value) => dispatch(store(value)),
        appDelete: () => dispatch(del()),
        appDeleteItem: (id) => dispatch(delItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
