import { clickedMyButton } from '../actions';
import { MY_BUTTON_CLICKED } from '../constants';

describe('actions', () => {
  it('should create clickedMyButton action', () => {
    const expectedAction = {
      type: MY_BUTTON_CLICKED,
    };
    expect(clickedMyButton()).toEqual(expectedAction);
  });
});
