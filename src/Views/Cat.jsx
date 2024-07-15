import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { fetchCatData } from "../Services/PetResources";
import { LoadingIndicator } from "./LoadingIndicator/LoadingIndicator";
import { PetListItem } from "./PetListItems/PetListItem";

export function Cat() {
    const location = useLocation();
    const [isLoading, setLoading] = useState(true);
    const [catData, setCatData] = useState([]);
    const [isAdoptable, setAdoptable] = useState(location.hash.includes('adoptable'));

    useEffect(() => {
        const adoptablePage = location.hash.includes('adoptable');
        setAdoptable(adoptablePage);
        setLoading(true);
        fetchCatData(adoptablePage).then((results) => {
            setCatData(results);
            setLoading(false);
        });
    }, [location]);

    return (
        <div className="pet-list">
            <div className="pet-loading" role="status">
                {isLoading && <LoadingIndicator text="Loading Cat Data" />}
            </div>
            {!isLoading && <>
                <h2>{isAdoptable ? 'Adoptable Cats' : 'Our Cat Ambassadors'}</h2>
                {catData.map((c, i) => <PetListItem key={i} petData={c} isImageLeft={i % 2 === 0} />)}
            </>}
        </div>
    )
}