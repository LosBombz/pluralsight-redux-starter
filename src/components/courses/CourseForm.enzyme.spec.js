import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
    const props = {
        course: {},
        saving: Boolean(saving),
        errors: {},
        onSave: ()=>{},
        onChange: ()=>{}
    };

    return shallow(<CourseForm {...props}/>);

}

describe('CourseForm via enzyme', ()=> {
    it('should render <form> and <h1>', ()=> {
        const wrapper = setup(false);

        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('should render the save button with the value of "Save" when not saving', ()=> {
        const wrapper = setup(false);

        expect(wrapper.find('input[type="submit"]').props().value).toEqual('Save');
    });

    it('should render the save button with the value of "Saving..." when saving', ()=> {
        const wrapper = setup(true);

        expect(wrapper.find('input[type="submit"]').props().value).toEqual('Saving...');

    });
});
