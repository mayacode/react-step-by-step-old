import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';
import MyButton from './MyButton/container';
import BookContainer from './BookContainer';


describe('<Main />', () => {
  let wrapper;
  let myButton;
  let bookContainer;

  beforeAll(() => {
    wrapper = shallow(<Main />);
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
  });



  describe('<BookContainer />', () => {
    it('is only 1', () => {
      expect(bookContainer.length).toEqual(1);
    });
  });
});
