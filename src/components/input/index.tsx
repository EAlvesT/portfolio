import './styles.scss';

export function Input({ type, placeholder, required, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className='input'
      placeholder={placeholder}
      required={required}
      {...rest}
    />
  )
}