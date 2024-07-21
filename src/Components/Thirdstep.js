import React from 'react'
import { Button,TextField } from '@mui/material';
import { useContext } from 'react';
import { multistepContext } from '../StepContext';

export default function Thirdstep() {
    const {setStep,userData,setUserData,submitData} = useContext(multistepContext);

  return (
    <div>
       <div>
            <TextField label='City' value={userData['city']} onChange={(e)=> setUserData({...userData,'city':e.target.value})} margin='normal' variant='outlined' color='secondary'></TextField>
        </div>
        <div>
            <TextField label='Landmark' value={userData['landmark']} onChange={(e)=> setUserData({...userData,'landmark':e.target.value})} margin='normal' variant='outlined' color='secondary'></TextField>
        </div>
        <div>
            <TextField label='Postal Code' value={userData['postalcode']} onChange={(e)=> setUserData({...userData,'postalcode':e.target.value})} margin='normal' variant='outlined' color='secondary'></TextField>
        </div>
        <div>
            <button variant="contained" onClick={()=>setStep(2)} color='primary'>Back</button>
            <button variant="contained" onClick={submitData} color='primary'>Submit</button>
        </div>
    </div>
  )
}
