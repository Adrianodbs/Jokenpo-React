import ActionsGame from './components/actions-game'
import Button from './components/button'
import Input from './components/input'
import Score from './components/score'
import * as C from './styles'

function App() {
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

  const handleClick = value => {
    console.log(value)
  }
  return (
    <C.Container>
      <C.Flex direction="column">
        <C.Typography fontWeight="400" size="32px" lineHeight="48px">
          JO KEN PÔ
        </C.Typography>
        <Input
          placeholder="Digite o nome do jogador"
          onChange={value => console.log(value)}
        />
        <Button onClick={() => console.log('cliquei')}>Iniciar</Button>
        <Score userName="Jogador" scorePlayer="0" scoreComputer="0" />
        <C.Spacer margin="10px" />

        <C.Flex justify="space-around">
          <C.Typography size="32px">❓</C.Typography>
          <C.Typography size="32px">❓</C.Typography>
        </C.Flex>

        <C.Flex direction="column" gap="0px">
          <C.Typography>Iniciar jogo!</C.Typography>
          <C.Rules>Regras</C.Rules>
        </C.Flex>
        <ActionsGame actions={actions} onClick={value => handleClick(value)} />
      </C.Flex>
    </C.Container>
  )
}

export default App
