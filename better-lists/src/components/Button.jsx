const Button = ({ isLoading, children, ...rest }) => {
    // simple button that can be disabled during loading state
    // can add further functionality in the future

    return (<button {...rest} disabled={isLoading}>{children}</button>);
} 

export default Button;