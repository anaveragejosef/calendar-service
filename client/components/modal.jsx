import React from 'react';
import styled from 'styled-components';
import CalendarPopUp from './calendarPopUp.jsx';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
`;
const ModalDisplay = styled(ModalWrapper)`
  display: block;
`;
const ModalHide = styled(ModalWrapper)`
  display: none;
`;
const ModalContent = styled.div`
  position: relative;
  background: #ffffff;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
  width: 50%;
  top:25%;
  left:50%;
  border-radius: 12px;
  height: auto;
  transform: translate(-12%,-12%);
`;
 // top:10%;
 // left:10%;

const Modal = (props) => {
  const { bookedNights, checkin, checkout, calendarToggle } = props;
  const { updateDates, clickCount, calendarOpen } = props;
  const showOrHideFunc = () => {
    if (calendarOpen) {
      return (
        <ModalDisplay>
          <ModalContent>
            <CalendarPopUp
              bookedNights={bookedNights}
              checkin={checkin}
              checkout={checkout}
              clickCount={clickCount}
              calendarOpen={calendarOpen}
              calendarToggle={calendarToggle}
              updateDates={updateDates}
            />
          </ModalContent>
        </ModalDisplay>
      );
    }
    return (
      <ModalHide />
    );
  };

  return (
    showOrHideFunc()
  );
};

export default Modal;
