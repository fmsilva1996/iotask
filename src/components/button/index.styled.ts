import styled from 'styled-components'

type IButtonStyled = {
  readonly isDisabled?: boolean
}

const Button = styled.button<IButtonStyled>`
  width: 206px;
  height: 46px;

  font-family: 'Rubik';
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-transform: uppercase;

  border: 0px;
  border-radius: 3px;

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: auto;
  }
`

export const PrimaryButton = styled(Button)`
  color: rgba(255, 255, 255, 0.95);
  background: rgba(77, 124, 254, 0.9);
  transition: background 600ms ease 0s, color 200ms ease 0s;

  :hover {
    background: rgba(77, 124, 254, 1);
    color: rgb(255, 255, 255, 1);
  }

  :disabled {
    background: rgb(242, 244, 246);
    color: rgb(119, 140, 162);
  }
`

export const OutlineButton = styled(Button)`
  color: rgba(37, 38, 50, 0.95);
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(77, 124, 254, 0.9);
  transition: border 200ms ease 0s, color 200ms ease 0s;

  :hover {
    color: rgba(77, 124, 254, 1);
    border: 1px solid rgba(77, 124, 254, 1);
  }

  :disabled {
    color: rgb(119, 140, 162);
    border: 1px solid rgb(232, 236, 239);
  }
`
