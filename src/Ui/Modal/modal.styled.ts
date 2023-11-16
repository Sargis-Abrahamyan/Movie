import styled from 'styled-components';

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  padding: 10px;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
`;

export const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  border-radius: 5px;
`;

export const CloseModal = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 5;
  cursor: pointer;
  background-color: red;
  color: #fff;
  border-radius: 3px;
  border: none;
`;
