import React from 'react'
import { Flex, Typography } from '../../styles'
import {Action} from './style'

function ActionsGame({actions, disabled, onClick}) {
  return (
    <Flex>
      {actions.map(action => (
        <Action key={action.value} disabled={disabled} onClick={() =>onClick(action)}>
          <Typography size='32px'>{action.label}</Typography>
        </Action>
      ))}
    </Flex>
  )
}

export default ActionsGame