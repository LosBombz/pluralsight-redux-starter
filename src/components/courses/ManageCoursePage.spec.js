import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('ManageCoursePage', ()=>{
    it('should set an error message when trying to save an empty title', ()=> {
        const props = {
            authors: [],
            course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
            actions: {
                saveCourse: ()=> {return Promise.resolve();}
            }
        };

        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = wrapper.find('input[type="submit"]');


        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});
