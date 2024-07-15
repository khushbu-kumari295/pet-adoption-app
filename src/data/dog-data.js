import dog1 from '../Images/dog1.jpg';
import dog2 from '../Images/dog2.jpg';
import dog3 from '../Images/dog3.jpg';
import dog4 from '../Images/dog4.jpg';
import goldenretriever from '../Images/golden retriever.jpg';
import huskypuppy from '../Images/huskypuppy.jpg';
import pomeranian from '../Images/pomeranian.jpg';
import pug from '../Images/pug.jpg';



export const dogs = [
    {
        imageLink: goldenretriever,
        name: 'Mr. Cooper',
        category: 'Dog',
        isAdoptable: true,
        data: {
            Age: '3 year',
            Sex: 'Male',
            Breed: 'Golden Retriever',
            Color: 'Golden',
        },
        moreInfo: `Mr. Cooper is a fun-loving dog staying at fur-ever paradise. You may make a fool of yourself with him, and not only will he not scold you, but he will make a fool of himself too.`
    },
    {
        imageLink: pomeranian,
        name: 'Ms. Teddy',
        category: 'Dog',
        isAdoptable: true,
        data: {
            Age: '1 year',
            Sex: 'Female',
            Breed: 'Pomerian',
            Color: 'Golden',
        },
        moreInfo: `Ms. Teddy is a sweet pomerian staying at fur-ever paradise. You can say any foolish thing to her, and she will give you a look that says, ‘Wow, you’re right! I never would’ve thought of that!'`
    },
    {
        imageLink: pug,
        name: 'Mr. Hamish',
        category: 'Dog',
        isAdoptable: true,
        data: {
            Age: '2 year',
            Sex: 'Male',
            Breed: 'Pug',
            Color: 'Apricot',
        },
        moreInfo: `Mr. Hamish is a sweetheart of a boy who is calm and affectionate. He's looking for a calm home where he may go for daily walks and live inside with his family as a close relative. He follows basic commands and is well-behaved. The ideal dog for living in the city!`
    },
    {
        imageLink: dog2,
        name: 'Bess',
        category: 'Dog',
        isAdoptable: true,
        data: {
            Age: '7 years',
            Sex: 'Female',
            Breed: 'Coorgi',
            Color: 'Mix',
        },
        moreInfo: `Bess is a young mother who has hit a rocky patch, yet her lovely, nurturing spirit comes through. She'd be the ideal companion for a household with older children looking for a peaceful, friendly pet with decent house manners.`
    },
    {
        imageLink: dog1,
        name: 'Milo',
        category: 'Dog',
        isAdoptable: false,
        data: {
            age: '1 year',
            sex: 'Female',
            Color: 'White & Black',
        }
    },
    {
        imageLink: dog3,
        name: 'Rex',
        category: 'Dog',
        isAdoptable: false,
        data: {
            age: '3 year',
            sex: 'Male',
            Color: 'Golden',
        }
    },

    {
        imageLink: dog4,
        name: 'Ollie',
        category: 'Dog',
        isAdoptable: false,
        data: {
            age: '4 year',
            sex: 'Female',
            Color: 'White',
        }
    },
    {
        imageLink: huskypuppy,
        name: 'Bo and Mac',
        category: 'Dog',
        isAdoptable: false,
        data: {
            age: '3 years both',
            sex: 'Female',
            Color: 'Husky',
        }
    },

]