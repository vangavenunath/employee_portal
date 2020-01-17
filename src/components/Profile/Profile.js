import React, { useState } from 'react';
import {StyledForm, StyledInput, StyledSubmit, StyledDiv} from '../styles/CommonStyles'

const Profile = (() => {
    const [profile, setProfile] = useState({
        FirstName: '',
        LastName: '',
        Phone: '',
        Email: '',
        WorkEmail: '',
        DateOfBirth: ''
    })

    const validateForm = () => {
        return true //profile.FirstName.length > 0 && profile.WorkEmail.length > 0;
      }

    const handleChange = (evt) => {
        
        setProfile({
            ...profile,
            [evt.target.id]: evt.target.value,
        });
        console.log(profile)
    }


    const handleSubmit = (evt) => {
        evt.preventDefault(); //Avoids reloading page
        console.log(evt.target.value);
        alert("Success");
        return false;
    }

    return (
        <StyledDiv>
            <h1 align="center">Profile Management</h1>
            <StyledForm onSubmit={evt => handleSubmit(evt)}>
                <StyledInput id="FirstName" type="text" onChange={e => handleChange(e)}
                    placeholder="Enter FirstName" />
                    <br />
                <StyledInput id="LastName" type="text" onChange={e => handleChange(e)}
                    placeholder="Enter LastName" />
                    <br />
                <StyledInput id="Phone" type="text" onChange={e => handleChange(e)}
                    placeholder="Enter Phone" />
                    <br />
                <StyledInput id="Email" type="text" onChange={e => handleChange(e)}
                    placeholder="Enter Email" />
                    <br />
                <StyledInput id="WorkEmail" type="text" onChange={e => handleChange(e)}
                    placeholder="Enter WorkEmail" />
                    <br />
                <StyledInput id="DateOfBirth" type="text" onChange={e => handleChange(e)}
                    placeholder="Enter DateOfBirth" />
                <br />
                <StyledSubmit type="submit" disabled={!validateForm()} value="Save" />
            </StyledForm>
        </StyledDiv>
    );
})
export default Profile;