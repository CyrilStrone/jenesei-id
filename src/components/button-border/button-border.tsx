import { ButtonBorderProps, ButtonBorderWrapper } from '.'
import { StyledInterSB16 } from '@styles/fonts/inter'
import React from 'react'
import { FC } from 'react'
import { Ripple } from 'react-ripple-click'

export const ButtonBorder: FC<ButtonBorderProps> = React.memo(
  (props) => {
    return (
      <ButtonBorderWrapper onClick={props.onClick} type={props.type}>
        <Ripple />
        <StyledInterSB16>{props.title}</StyledInterSB16>
      </ButtonBorderWrapper>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title
  }
)
