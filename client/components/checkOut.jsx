import React from 'react';
import styled from 'styled-components';

const CheckTitleDiv = styled.div`
  font-weight: 800;
  font-size: 10px;
  padding-top: 15%;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  color: #222222;
`;
const DateDiv = styled.div`
  font-size: 14px;
  padding-bottom: 15%;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #222222;
`;

const CheckOut = (props) => {
  const { checkout, calendarToggle } = props;
  return (
    <div onClick={calendarToggle}>
      <CheckTitleDiv>
        CHECK-OUT
      </CheckTitleDiv>
      <DateDiv>
        {checkout}
      </DateDiv>
    </div>
  );
};

export default CheckOut;
