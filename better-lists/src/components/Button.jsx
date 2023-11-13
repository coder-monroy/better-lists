const Button = ({ isLoading, children, ...rest }) => {
    return <button {...rest} disabled={isLoading}>{children}</button>
} 

export default Button;