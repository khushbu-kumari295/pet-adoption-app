import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { fetchDogData } from "../Services/PetResources";
import { LoadingIndicator } from "./LoadingIndicator/LoadingIndicator";
import { PetListItem } from "./PetListItems/PetListItem";

export function Dog() {
    const location = useLocation();
    const [isLoading, setLoading] = useState(true);
    const [dogData, setDogData] = useState([]);
    const [isAdoptable, setAdoptable] = useState(location.hash.includes('adoptable'));

    useEffect(() => {
        const adoptablePage = location.hash.includes('adoptable');
        setAdoptable(adoptablePage);
        setLoading(true);
        fetchDogData(adoptablePage).then((results) => {
            setDogData(results);
            setLoading(false);
        });
    }, [location]);

    return (
        <div className="pet-list">
            <div className="pet-loading" role="status">
                {isLoading && <LoadingIndicator text="Loading Dog Data" />}
            </div>
            {!isLoading && <>
                <h2>{isAdoptable ? 'Adoptable Dogs' : 'Our Dog Ambassadors'}</h2>
                {dogData.map((c, i) => <PetListItem key={i} petData={c} isImageLeft={i % 2 === 0} />)}
            </>}
        </div>
    )
}