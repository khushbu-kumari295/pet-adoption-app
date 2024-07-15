import { useLocation } from 'react-router';
import { placeAddress, placeTitle } from '../data/config';
import catYogaImg from '../Images/catyoga2.jpg';
import dogRun from '../Images/dogrun.jpg';
import petmas from '../Images/petmas1.jpg';
import './SpecialEvents.css';


export function SpecialEvents() {
    const location = useLocation();
    const showCatYoga = location.hash === '#cat-yoga';
    const showDogRun = location.hash === '#dog-run';
    const showPetMas = location.hash === '#pet-mas';
    return <div>
        {showCatYoga && <div className="cat-yoga-container special-events">

            <div className="event-image cat-yoga">
                <img src={catYogaImg} alt="Cat yoga" />
            </div>

            <div className="special-events-content">
                <h1>Welcome to Cat Yoga Cat Classes</h1>

                <h3>About this event</h3>
                <p>Grab your mat and your cat and get ready for Cats and Mats Feline Good: After Dark Yoga Session! All levels of experience are welcome!</p>

                <h4> Duration</h4>
                <p>  1 Hour</p>
                <h4>About</h4>
                <p>
                    Have you become stressed as a result of the holiday season's craziness? After a long day at work, our Cats & Mats Feline-Good Yoga class will be the purrfect way to unwind! Join Erin Grossman, our teacher, to de-stress before the holidays! Erin finished her 500-hour Yoga Works Teacher Training in Los Angeles. Erin's goal has always been to share her enthusiasm for yoga and its numerous advantages with her pupils and loved ones. Erin's classes are interesting, innovative, and well-rounded. For our next virtual class, please join Erin and her two kitties on the mat! All levels are invited to participate in our free virtual yoga session 29 Dec 2021; all you need is a mat (and possibly a cat) and access to the internet. Register now and you'll receive an email with a link to join our class LIVE. Can't watch in real time? After the event, a recording will be made and emailed to everyone who registered!
                </p>
            </div>
        </div>}

        {showDogRun && <div className="dog-run-container special-events">
            <div className="event-image dog-run">
                <img src={dogRun} alt="Dog Run" />
            </div>
            <div className="special-events-content">
                <h1>Welcome to Dog 5k Run</h1>

                <p className="dog-quote">"Dogs make great running partners. Even small dogs can do it!"</p>
                <p>
                    "Dogs make excellent running companions. It's possible for even small dogs to do it!"

                    Every dog, regardless of size, should seek permission from their veterinarian before beginning to run, and they, like people, should begin slowly and gradually increase their mileage to avoid injury. However, you might be astonished at how far they can go. You have arrived at the following address: 40+ Dog-Friendly Races in and Around Seattle / Home / Dog Health / 40+ Dog-Friendly Races in and Around Seattle DECEMBER 28, 2021: 40+ Dog-Friendly Races in and around Seattle It's possible for even small dogs to accomplish it! Every dog, regardless of size, should seek permission from their veterinarian before beginning to run, and they, like people, should begin slowly and gradually increase their mileage to avoid injury.
                </p><p>
                    However, you might be astonished at how far they can go. Chester, my little Dachshund, used to run with me on a regular basis, and he could run for 5 to 10 minutes.
                </p>
            </div>
        </div>}

        {showPetMas && <div className="pet-mas-container special-events">
            <div className="event-image pet-mas">
                <img src={petmas} alt="Petmas" />
            </div>
            <div className="special-events-content pet-mas-content">
                <h1>PetMas celebration</h1>
                <div>
                    <h4>Pet Portrait with Santa</h4>
                    <p>SATURDAY, DECEMBER 20 11-AM-2PM</p>
                    <p>{placeAddress}</p>

                    <h4>Drive Through Event</h4>
                    <p> $20</p>
                    <p>Pet Photos only</p>
                    <p>Welcome to {placeTitle} petmas celebration pretty much a must-do december event christmas celebration for the hoomans.</p>
                </div>

            </div>

        </div >}


    </div >

}