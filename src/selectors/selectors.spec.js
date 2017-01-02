import expect from 'expect';
import * as selectors from './selectors';

describe('Selectors', () => {
    describe('Author Selectors', () => {
        describe('authorsFromattedForDropdown', ()=> {
            it('should return author data formatter for use in a dropdown', () => {
                const authorsFormattedForDropdown = selectors.authorsFormattedForDropdown;
                const authors = [
                    {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                    {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
                ];

                const expected = [
                    {value: 'cory-house', text: 'Cory House'},
                    {value: 'scott-allen', text: 'Scott Allen'}
                ];

                expect(authorsFormattedForDropdown(authors)).toEqual(expected);
            });
        });
    });
});
