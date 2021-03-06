import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestDropdown from './guestDropdown.jsx';

const GuestWrapper = styled.div`
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border: 1px solid #b0b0b0;
  padding-top:0%;
`;
const GuestDiv = styled.div`
  padding-left: 10%;
  padding-top: 5%;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  color: #222222;
  font-weight: 800;
  font-size: 10px;
`;
const GuestCountDiv = styled.div`
  padding-left: 10%;
  padding-bottom: 5%;
  font-size: 14px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #222222;
`;

const Guest = (props) => {
  const numberOfGuests = () => {
    const { guestCount } = props;
    if (guestCount > 1) {
      return (
        <span>
          {guestCount} guests
        </span>
      );
    }
    return (
      <span>
        {guestCount} guest
      </span>
    );
  };

  const menuClicked = () => {
    if (props.dropdownOpen) {
      const { minusGuestCount, addGuestCount } = props;
      const { adults } = props;
      const { childrenCount } = props;
      const { infants } = props;
      return (
        <GuestDropdown
          minusGuestCount={minusGuestCount}
          addGuestCount={addGuestCount}
          adults={adults}
          childrenCount={childrenCount}
          infants={infants}
        />
      );
    }
  };

  const { guestMenuToggle } = props;
  return (
    <div>
      <GuestWrapper className="guest" onClick={guestMenuToggle}>
        <GuestDiv>GUESTS</GuestDiv>
        <GuestCountDiv>{numberOfGuests()}</GuestCountDiv>
      </GuestWrapper>
      <div>
        {menuClicked()}
      </div>
    </div>
  );
};

export default Guest;

Guest.propTypes = {
  dropdownOpen: PropTypes.bool.isRequired,
  guestMenuToggle: PropTypes.func.isRequired,
  guestCount: PropTypes.number.isRequired,
  minusGuestCount: PropTypes.func.isRequired,
  addGuestCount: PropTypes.func.isRequired,
  adults: PropTypes.number.isRequired,
  childrenCount: PropTypes.number.isRequired,
  infants: PropTypes.number.isRequired,
};
