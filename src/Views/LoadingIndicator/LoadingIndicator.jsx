import './LoadingIndicator.css';

export function LoadingIndicator({ text }) {
    return <div className="loading-container">
        <div className="loading"></div>
        <div className="loading-text">{text}</div>
    </div>;
}