import './button.css';
import PropTypes from 'prop-types';
function Button({ children, color = 'default' }) {
    return <button className={color}>{children}</button>;
}

export default Button;

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'default', 'danger'])
}