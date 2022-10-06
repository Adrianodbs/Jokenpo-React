import { useState, useEffect } from 'react'
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
  },
  computerWin: {
    title: 'Que pena',
    message: 'Não foi dessa vez, mas tente novamente'
  },
  playerWin: {
    title: 'Parabéns!',
    message: 'Você venceu'
  }
}

const valueTypeEnum = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3
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
  const [textGame, setTextGame] = useState('Iniciar jogo!')

  const [scorePlayerValue, setScorePlayerValue] = useState(0)
  const [scoreComputerValue, setScoreComputerValue] = useState(0)
  const [userAction, setUserAction] = useState('❓')
  const [computerAction, setComputerAction] = useState('❓')

  const [userName, setUserName] = useState('JOGADOR')
  const [playGame, setPlayGame] = useState(false)

  const scoreToWin = 10

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

  const randomActionComputer = () => {
    const number = Math.floor(Math.random() * actions.length)
    return actions[number]
  }

  const handleClick = value => {
    setUserAction(value.label)
    const actionComputer = randomActionComputer()
    setComputerAction(actionComputer.label)

    checkWinner(value.value, actionComputer.value)
  }

  const checkWinner = (playerValue, computerValue) => {
    const playerRockWin =
      playerValue === valueTypeEnum.ROCK &&
      computerValue === valueTypeEnum.SCISSORS
    const playerPaperWin =
      playerValue === valueTypeEnum.PAPER &&
      computerValue === valueTypeEnum.ROCK
    const playerScissorsWin =
      playerValue === valueTypeEnum.SCISSORS &&
      computerValue === valueTypeEnum.PAPER

    const drawerResult = playerValue === computerValue

    const playerWin = playerRockWin || playerPaperWin || playerScissorsWin

    if (drawerResult) return setTextGame('Empate! Jogue novamente.')
    if (playerWin) {
      setScorePlayerValue(state => state + 1)
      return setTextGame('Vitória! Jogue novamente')
    }
    setScoreComputerValue(state => state + 1)
    return setTextGame('Derrota! Jogue novamente')
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
    if (playGame) return resetValues()
    setPlayGame(true)
  }

  const resetValues = () => {
    setTextGame('Iniciar o jogo !')
    setPlayGame(false)
    setScorePlayerValue(0)
    setScoreComputerValue(0)
    setUserAction('❓')
    setComputerAction('❓')
  }

  useEffect(() => {
    const checkVictory = () => {
      const playerWin = scorePlayerValue == scoreToWin
      const computerWin = scoreComputerValue == scoreToWin
      if (playerWin) {
        handleOpenModal('playerWin')
        resetValues()
      }
      if (computerWin) {
        handleOpenModal('computerWin')
        resetValues()
      }
    }

    checkVictory()
  }, [scoreComputerValue, scorePlayerValue])

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
        <Score
          userName={userName}
          scorePlayer={scorePlayerValue}
          scoreComputer={scoreComputerValue}
        />
        <C.Spacer margin="10px" />

        <C.Flex justify="space-around">
          <C.Typography size="32px">{userAction}</C.Typography>
          <C.Typography size="32px">{computerAction}</C.Typography>
        </C.Flex>

        <C.Flex direction="column" gap="0px">
          <C.Typography>{textGame}</C.Typography>
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
