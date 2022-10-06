import { Flex, Spacer, Typography } from '../../styles'
import {ModalStyled, CLoseModal} from './style'

function Modal({
  open, handleOpenModal, titleModal, messageModal
}) {
  return (
    <ModalStyled open={open}>
      <Flex direction='column'>
        <Typography primary>{titleModal}</Typography>
        <Spacer margin='8px' />
        <CLoseModal onClick={()=> handleOpenModal()}>X</CLoseModal>
        <Typography primary>{messageModal}</Typography>
      </Flex>
    </ModalStyled>
  )
}

export default Modal