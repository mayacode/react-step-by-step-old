import reducer, { initialStore } from '../reducer';
import { MY_BUTTON_CLICKED } from '../constants';

describe('MyButton reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialStore);
  });

  it('should handle MY_BUTTON_CLICKED', () => {
    expect(
      reducer(undefined, {
        type: MY_BUTTON_CLICKED,
      })
    ).toEqual({
      clicks: initialStore.clicks + 1,
    });
  });
});
