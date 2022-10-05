import styled from 'styled-components'

export const ModalStyled = styled.div`
  width: 80%;
  background-color: #ececec;
  border-radius: 12px;
  padding: 16px;
  position: absolute;
  top: 2;
  transition: 0.5;
  z-index: 2;
`

export const CLoseModal = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 2%;
  top: 2%;

  background-color: #1a1a1a;
  border-radius: 50%;

  color: #ececec;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
`
