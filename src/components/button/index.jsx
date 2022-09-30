import {StyledButton} from './style'

function Button({children, onClick}) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button