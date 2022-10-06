import { useState } from 'react'
import ActionsGame from './components/actions-game'
import Button from './components/button'
import Input from './components/input'
import Modal from './components/modal'
import Score from './components/score'
import * as C from './styles'

const messages = {
  rules: {
    title: 'Regras',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
  },
  user: {
    title: 'Usuário',
    message: 'Preencha um nome para o jogador'
  }
}

const actions = [
  {
    value: 1,
    label: '👊',
    description: 'Rock'
  },
  {
    value: 2,
    label: '🖐️',
    description: 'Paper'
  },
  {
    value: 3,
    label: '✌️',
    description: 'Scissors'
  }
]

function App() {
  const [titleModal, setTitleModal] = useState('')
  const [messageModal, setMessageModal] = useState('')
  const [open, setOpen] = useState(false)
  const [userName, setUserName] = useState('JOGADOR')
  const [playGame, setPlayGame] = useState(false)

  const handleOpenModal = type => {
    if (!type) {
      setOpen(false)
      setTitleModal('')
      setMessageModal('')
      return
    }
    setOpen(true)
    setTitleModal(messages?.[type]?.title)
    setMessageModal(messages?.[type]?.message)
  }

  const handleClick = value => {
    console.log(value)
  }

  const handleUserName = value => {
    if (!value) return setUserName('JOGADOR')
    setUserName(value)
  }

  const startGame = () => {
    if (userName === 'JOGADOR') {
      handleOpenModal('user')
      return
    }
    setPlayGame(true)
  }

  return (
    <C.Container>
      <C.Flex direction="column">
        <C.Typography fontWeight="400" size="32px" lineHeight="48px">
          JO KEN PÔ
        </C.Typography>
        <Input
          placeholder="Digite o nome do jogador"
          onChange={value => handleUserName(value)}
        />
        <Button onClick={startGame}>{playGame ? 'Parar' : 'Iniciar'}</Button>
        <Score userName={userName} scorePlayer="0" scoreComputer="0" />
        <C.Spacer margin="10px" />

        <C.Flex justify="space-around">
          <C.Typography size="32px">❓</C.Typography>
          <C.Typography size="32px">❓</C.Typography>
        </C.Flex>

        <C.Flex direction="column" gap="0px">
          <C.Typography>Iniciar jogo!</C.Typography>
          <C.Rules onClick={() => handleOpenModal('rules')}>Regras</C.Rules>
        </C.Flex>
        <ActionsGame
          actions={actions}
          onClick={value => handleClick(value)}
          disabled={!playGame}
        />
        <Modal
          open={open}
          titleModal={titleModal}
          messageModal={messageModal}
          handleOpenModal={() => handleOpenModal(null)}
        />
      </C.Flex>
    </C.Container>
  )
}

export default App
