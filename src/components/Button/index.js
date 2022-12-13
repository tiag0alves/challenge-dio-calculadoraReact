import { StyledButton } from './styles';

const Button = ({label, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {label}
        </StyledButton>
    );
}

export default Button;