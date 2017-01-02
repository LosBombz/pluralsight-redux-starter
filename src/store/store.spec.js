import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
    it('Should handle creating courses', () => {
        // arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Clean Code"
        };

        // act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        // assert
        const actualState = store.getState().courses[0];
        const expectedState = {
            title: "Clean Code"
        };

        expect(actualState).toEqual(expectedState);
    });
});
