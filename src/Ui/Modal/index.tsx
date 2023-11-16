import  { FC } from 'react';

import { ModalProps } from './types';
import * as Styled from './modal.styled';

const Modal: FC<ModalProps> = ({ setOpenModal, children }) => {
  return (
    <Styled.OverlayModal>
      <Styled.Backdrop onClick={() => setOpenModal(false)}></Styled.Backdrop>
      <Styled.Modal>
        <Styled.CloseModal onClick={() => setOpenModal(false)}>
          X
        </Styled.CloseModal>
        {children}
      </Styled.Modal>
    </Styled.OverlayModal>
  );
};

export default Modal;
