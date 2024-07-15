import './LinkButton.css';

export function LinkButton({ children, ...buttonProps }) {
    return <button {...buttonProps} className="link-button">{children}</button>
}