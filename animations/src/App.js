import React, { Component } from "react"

import "./App.css";
import Modal from "./components/Modal/Modal"
import Backdrop from "./components/Backdrop/Backdrop"
import List from "./components/List/List"

import Transition from 'react-transition-group/Transition'

class App extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false
    }

    showModal = () => this.setState({modalIsOpen: true})

    closeModal = () => this.setState({modalIsOpen: false})

    toggleBlock = () => this.setState(prevState => { return { showBlock: !prevState.showBlock } })

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>

                {/* <div style={{marginBottom: '20px'}}>
                    <button className="Button" onClick={this.toggleBlock}>toggle</button>
                    <Transition
                        in={this.state.showBlock}
                        timeout={1000}
                        mountOnEnter
                        unmountOnExit
                    >
                        {state => (
                            <div style={{
                                backgroundColor: 'red',
                                padding: '10px 20px',
                                color: 'white',

                                transition: 'opacity 1s ease-out',
                                opacity: state === 'exiting' ? 0 : 1
                            }}>block</div>
                        )}
                    </Transition>
                </div> */}

                <Transition
                    in={this.state.modalIsOpen}
                    timeout={150}
                    mountOnEnter
                    unmountOnExit
                >
                    {state => (
                        <Modal
                            show={state}
                            closed={this.closeModal}
                        />
                    )}
                </Transition>
                {/* <Modal
                    show={this.state.modalIsOpen}
                    closed={this.closeModal}
                /> */}
                <Backdrop show={this.state.modalIsOpen} />
                <button className="Button" onClick={this.showModal}>Open Modal</button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        )
    }
}

export default App
