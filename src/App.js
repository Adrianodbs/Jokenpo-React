import Button from './components/button'
import Input from './components/input'
import * as C from './styles'

function App() {
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
        <Button>Iniciar</Button>
      </C.Flex>
    </C.Container>
  )
}

export default App
