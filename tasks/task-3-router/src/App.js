import React from 'react'
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom'

import styles from './App.module.css'

import InitialTaskList from './components/InitialTaskList/InitialTaskList'
import Users from './containers/Users/Users'
import Courses from './containers/Courses/Courses'
// import Course from './containers/Course/Course'

const App = (props) => {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <div className={styles.FirstLineLinks}>
                    <NavLink to='/users'>users</NavLink>
                    <NavLink to='/courses'>courses</NavLink>
                    <NavLink to='/all-courses'>redirect</NavLink>
                    <NavLink to='/ksfgru'>404</NavLink>
                </div>
                <Switch>
                    <Route path='/users' exact component={Users} />
                    <Route path='/courses' component={Courses} />
                    {/* <Route path='/courses/:id' exact component={Course} /> */}
                    <Redirect from='/all-courses' to='/courses' />
                    <Route render={() => <div><h1>404 :(</h1></div>}/>
                </Switch>
            </BrowserRouter>
            <InitialTaskList />
        </div>
    )
}

export default App
