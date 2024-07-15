export function PetImageItemOrder({ petImageLayout, petDescribeLayout, isImageLeft }) {
    return <>
        {isImageLeft ? petImageLayout : petDescribeLayout}
        {isImageLeft ? petDescribeLayout : petImageLayout}
    </>;
}