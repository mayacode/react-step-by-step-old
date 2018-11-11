import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';
import MyButton from './MyButton';
import BookContainer from './BookContainer';


describe('<Main />', () => {
  let wrapper;
  let number;
  let myButton;
  let bookContainer;

  beforeAll(() => {
    wrapper = shallow(<Main />);
    number = wrapper.state().number;
    myButton = wrapper.find(MyButton);
    bookContainer = wrapper.find(BookContainer)
  });

  it('matches a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('<MyButton />', () => {
    it('is only 1', () => {
      expect(myButton.length).toEqual(1);
    });

    it('state.number is by default equal 0', () => {
      expect(number).toEqual(0);
    });

    it('increases state.number when button in MyButton is clicked', () => {
      const clickableButton = myButton.shallow().find('button');
      clickableButton.simulate('click');
      expect(wrapper.state().number).toEqual(1);
    });
  });



  describe('<BookContainer />', () => {
    it('is only 1', () => {
      expect(bookContainer.length).toEqual(1);
    });
  });
});
