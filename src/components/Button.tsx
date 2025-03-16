interface Props {
  children: string
  color?: string
  onClick: () => void
}

const Button = ({ children, color = 'primary', onClick }: Props) => (
  <button type="button" className={'btn btn-' + color} onClick={onClick}>
    {children}
  </button>
)

export default Button
