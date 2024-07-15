import React from "react";
import { LinkButton } from "../Buttons/LinkButton";

export function KeyValueDescribe({
    name,
    keyValueData,
    onReadMoreClick,
    showReadMore,
    isShowMoreOpen
}) {
    const keys = Object.keys(keyValueData);
    return <div>
        {keys.map(k => <React.Fragment key={k}>
            <div className="describe-properties">
                <strong>{k}</strong>:&nbsp;&nbsp;
                <span>{keyValueData[k]}</span>
            </div>
        </React.Fragment>)}
        {showReadMore && <LinkButton
            onClick={onReadMoreClick}
            alt={isShowMoreOpen ? `Read less about ${name}` : `Read more about ${name}`}>
            {isShowMoreOpen ? '- Read Less' : '+ Read More'}
        </LinkButton>}
    </div>;
}