import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuestDropdown from '../components/guestDropdown.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests for Guest Dropdown Component', () => {
  test('GuestDropdown renders without crashing', () => {
    const mockCallBack = jest.fn();
    const options = {
      addGuestCount: mockCallBack,
      minusGuestCount: mockCallBack,
      adults: 1,
      childrenCount: 0,
      infants: 0,
    };
    const wrapper = shallow(<GuestDropdown {...options} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Tests that click event increments adults count', () => {
    const mockCallBack = jest.fn(() => {
      options.adults = options.adults + 1;
    });
    const options = {
      addGuestCount: mockCallBack,
      minusGuestCount: mockCallBack,
      adults: 1,
      childrenCount: 0,
      infants: 0,
    };
    const guest = shallow((<GuestDropdown {...options} />));
    expect(options.adults).toBe(1);
    guest.find('.adults-add').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(options.adults).toBe(2);
  });

  test('Tests that click event decrements childrenCount', () => {
    const mockCallBack = jest.fn(() => {
      options.childrenCount = options.childrenCount - 1;
    });
    const options = {
      addGuestCount: mockCallBack,
      minusGuestCount: mockCallBack,
      adults: 1,
      childrenCount: 1,
      infants: 0,
    };
    const guest = shallow((<GuestDropdown {...options} />));
    expect(options.childrenCount).toBe(1);
    guest.find('.children-minus').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(options.childrenCount).toBe(0);
  });
});
