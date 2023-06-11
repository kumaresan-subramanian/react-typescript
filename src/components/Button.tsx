import {ButtonProps} from './Types'

export const Button = (props : ButtonProps) => {

  return <button onClick={event => props.handleClick(event, 1)}>{props.children}</button>
}