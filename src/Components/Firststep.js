import React from 'react';
import { Button,TextField } from '@mui/material';
import { useContext } from 'react';
import { multistepContext } from '../StepContext';

export default function Firststep() {
    const {setStep,userData,setUserData} = useContext(multistepContext);
  return (
    <div>
        <div>
            <TextField label='First Name' value={userData['firstname']} onChange={(e)=> setUserData({...userData,'firstname':e.target.value})} margin='normal' variant='outlined' color='secondary'></TextField>
        </div>
        <div>
            <TextField label='Last Name' value={userData['lastname']} onChange={(e)=> setUserData({...userData,'lastname':e.target.value})} margin='normal' variant='outlined' color='secondary'></TextField>
        </div>
        <div>
            <TextField label='Contact Number' value={userData['contactnumber']} onChange={(e)=> setUserData({...userData,'contactnumber':e.target.value})} margin='normal' variant='outlined' color='secondary'></TextField>
        </div>
        <div>
            <button variant="contained" onClick={()=>setStep(2)} color='primary'>Next</button>
        </div>
    </div>
  )
}
