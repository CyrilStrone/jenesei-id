import { ButtonPlaystationShortProps, ButtonPlaystationShortWrapper } from '.'
import React from 'react'
import { FC } from 'react'

export const ButtonPlaystationShort: FC<ButtonPlaystationShortProps> =
  React.memo(
    (props) => {
      return (
        <ButtonPlaystationShortWrapper checked={props.checked}>
          {props.icon && props.icon()}
        </ButtonPlaystationShortWrapper>
      )
    },
    (prevProps, nextProps) => {
      return prevProps.checked === nextProps.checked
    }
  )
