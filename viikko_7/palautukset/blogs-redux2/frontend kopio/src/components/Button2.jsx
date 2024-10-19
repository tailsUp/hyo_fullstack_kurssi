const Button2 = ({ text, id, click }) => (
  <button id={id} data-testid={id} onClick={click}>
    {text}
  </button>
)

export default Button2