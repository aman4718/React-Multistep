import React from 'react'
import { Button,TextField } from '@mui/material';
import { useContext } from 'react';
import { multistepContext } from '../StepContext';

export default function Secondstep() {
    const {setStep,userData,setUserData} = useContext(multistepContext);
  return (
    <div>
       <div>
            <TextField label='Email' value={userData['email']} onChange={(e)=> setUserData({...userData,'email':e.target.value})} margin='normal' variant='outlined' color='secondary'></TextField>
        </div>
        <div>
            <TextField label='Country' value={userData['county']} onChange={(e)=> setUserData({...userData,'country':e.target.value})} margin='normal' variant='outlined' color='secondary'></TextField>
        </div>
        <div>
            <TextField label='District' value={userData['district']} onChange={(e)=> setUserData({...userData,'district':e.target.value})} margin='normal' variant='outlined' color='secondary'></TextField>
        </div>
        <div>
            <button variant="contained" onClick={()=>setStep(3)} color='primary'>Next</button>
            <button variant="contained" onClick={()=>setStep(1)} color='primary'>Back</button>
        </div>
    </div>
  )
}
