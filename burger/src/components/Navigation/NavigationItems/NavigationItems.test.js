import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({ adapter: new Adapter() })

describe('<NavigationItems />', () => {
    let component

    beforeEach(() => {
        component = shallow(<NavigationItems />)
    })

    it('should render 1 item if not authenticated', () => {
        // const wrapper = shallow(<NavigationItems />)
        expect(component.find(NavigationItem)).toHaveLength(1)
    })

    it('should render 3 items if authenticated', () => {
        // const wrapper = shallow(<NavigationItems isAuthenticated />)
        component.setProps({
            isAuthenticated: true
        })
        expect(component.find(NavigationItem)).toHaveLength(3)
    })

    it('should render LogOut link if authenticated', () => {
        // const wrapper = shallow(<NavigationItems isAuthenticated />)
        component.setProps({
            isAuthenticated: true
        })
        expect(component.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true)
    })

})