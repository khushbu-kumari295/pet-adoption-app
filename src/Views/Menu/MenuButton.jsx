export function MenuButton({ text, children }) {
    return <li>
        <button type="button">{text}</button>
        <ul>
            {children}
        </ul>
    </li>;
}