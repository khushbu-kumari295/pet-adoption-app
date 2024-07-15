import { useState } from 'react';
import { KeyValueDescribe } from "./KeyValueDescribe";
import { PetImageItemOrder } from "./PetImageItemOrder";
import './PetListItem.css';

export function PetListItem({ petData, isImageLeft }) {
    const { imageLink, name, data, moreInfo } = petData;
    const [showMore, setShowMore] = useState(false);
    const onReadMoreClick = () => {
        setShowMore(!showMore);
    }

    return <div className="pet-item-container">
        <div className="pet-name">
            <h2>{name}</h2>
        </div>
        <PetImageItemOrder
            petImageLayout={
                <div className="pet-image">
                    <img src={imageLink} alt={name}></img>
                </div>
            }
            petDescribeLayout={
                <div className="pet-describe">
                    <KeyValueDescribe
                        name={name}
                        keyValueData={data}
                        onReadMoreClick={onReadMoreClick}
                        showReadMore={!!moreInfo}
                        isShowMoreOpen={showMore}
                    />
                </div>
            }
            isImageLeft={isImageLeft}
        />
        <div role="region" className="pet-more" aria-label={`more information about ${name}`} aria-hidden={!moreInfo || !showMore}>
            {!!moreInfo && showMore && <div>{moreInfo}</div>}
        </div>
    </div>
}