import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { BurgerBuilder } from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

configure({ adapter: new Adapter() })

describe('<BurgerBuilder />', () => {
    let component

    beforeEach(() => {
        component = shallow(<BurgerBuilder />)
    })

    it('should render <BuildControls /> when ingredients received', () => {
        component.setProps({
            ingredients: { salad: 1 }
        })

        expect(component.find(BuildControls)).toHaveLength(1)
    })
})