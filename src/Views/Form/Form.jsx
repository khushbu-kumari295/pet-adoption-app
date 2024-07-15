import { useState } from "react";
import { useNavigate } from "react-router";
import { contactEmail } from "../../data/config";
import missionImg from '../../Images/cat-form.png';
import { addSchedule } from "../../Services/ScheduleResource";
import './Form.css';
import { InputComponent } from "./InputComponent";
import { QuantityField } from "./QuantityField";
import { RadioGroup } from "./RadioGroup";
import { useFormData } from "./useFormData";


export function Form() {
    const [isSavingData, setSavingData] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setSavingData(true);
        addSchedule(data).then((allData) => {
            setSavingData(false);
            navigate('/upcoming-schedules');
        });
    };
    const {
        data,
        errors,
        touched,
        handleChange,
        handleNonEventChange,
        handleBlur,
        handleSubmit
    } = useFormData({ onSubmit });
    const { purpose, petGroup } = data;
    const commonProps = { handleChange, errors, handleBlur, touched };
    return (
        <div className="form">
            <div className="form-title"><h1>Plan a Visit</h1></div>
            <div className="form-image">
                <img src={missionImg} alt="Mission"></img>
            </div>

            <div className="form-container">
                <h3>Opening Hours</h3>
                <div className="hours">
                    <p>Mon: 12PM- 6PM ( Last visit at 5PM)</p>
                    <p>Wed-Thurs: 12PM- 6PM ( Last visit at 5PM)</p>
                    <p>Fri-Sun: 12PM- 6PM ( Last visit at 5PM)</p>
                </div>
                <p>Contact: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
                <form className="form-section" onSubmit={(e) => e.preventDefault()}>
                    <InputComponent
                        label="First Name"
                        name="firstName"
                        isRequired
                        {...commonProps}>
                        <input />
                    </InputComponent>

                    <InputComponent
                        label="Last Name"
                        isRequired
                        name="lastName"
                        {...commonProps}>
                        <input />
                    </InputComponent>

                    <InputComponent
                        label="Email"
                        name="email"
                        isRequired
                        {...commonProps}>
                        <input />
                    </InputComponent>

                    <InputComponent
                        label="Do you want us to send you weekly updates?"
                        name="subscribe"
                        {...commonProps}>
                        <input type="checkbox" />
                    </InputComponent>

                    <InputComponent
                        label="Purpose of Visit"
                        name="purpose"
                        isRequired
                        {...commonProps}>
                        <select defaultValue="">
                            <option value="" disabled hidden>Please select</option>
                            <option value="Lounge Visit">Lounge Visit</option>
                            <option value="Yoga with Cats">Yoga with Cats</option>
                            <option value="Pet Adoption" >Pet Adoption</option>
                            <option value="PetMas Celebration">PetMas Celebration</option>
                            <option value="5k Dog Run">5k Dog Run</option>
                        </select>
                    </InputComponent>
                    <div aria-hidden={!purpose}>
                        {!!purpose && <>
                            <InputComponent
                                label="How many persons are visiting?"
                                name="quantity"
                                isRequired
                                {...commonProps}>
                                <QuantityField value={data.quantity} setValue={handleNonEventChange("quantity")} />
                            </InputComponent>
                            <div className="petGroup">
                                <InputComponent
                                    label="Please select the pet group you want to visit"
                                    name="petGroup"
                                    isRequired
                                    {...commonProps}>
                                    <RadioGroup options={['Cat', 'Dog', 'Both']} checkedValue={petGroup} />
                                </InputComponent>
                            </div>

                            {(purpose === "Lounge Visit" || purpose === "Pet Adoption")
                                && <div className="input-date-time">
                                    <InputComponent
                                        label="Date"
                                        name="date"
                                        isRequired
                                        {...commonProps}>
                                        <input type="date" />
                                    </InputComponent>

                                    <InputComponent
                                        label="Time"
                                        name="time"
                                        isRequired
                                        {...commonProps}>
                                        <input type="time" min="09:00:00" max="17:00:00" />
                                    </InputComponent>
                                </div>
                            }
                            <InputComponent
                                label="Any comment you want to leave..."
                                name="comment"
                                {...commonProps}>
                                <textarea rows="4" cols="50" placeholder="Comments" />
                            </InputComponent>
                        </>}
                    </div>
                    <button
                        className="form-submit"
                        type="submit"
                        onClick={() => handleSubmit(data)}
                        disabled={isSavingData}
                    >{isSavingData ? 'Saving' : 'Submit'}</button>

                </form>
            </div>

        </div>
    )
}
