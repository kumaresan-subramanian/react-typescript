
export type ButtonProps = {
  children : string
  handleClick : (event : React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export type GreetProps = {
  name: string,
  messageCount?: number,
  isLoggedIn: boolean
}