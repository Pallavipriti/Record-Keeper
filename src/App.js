import './App.css'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';


export function Header() {
  return (
    <div className="header">
      Record Keeping</div>
  )
}


export default function App() {
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm({ form });

  }
 const handlePress=(e)=>{
    if (e.key =='Enter')
    addData();
  }

  
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);

  }
  return (
    <>
      <div className='form'>
        <Stack spacing={3} direction="row">
          <TextField value={form.name}
              onKeyDown={(e)=>handlePress(e)}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={form.email}
              onKeyDown={(e)=>handlePress(e)}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            id="outlined-basic" label="Email" variant="outlined" />
          <TextField value={form.contact}
            onKeyDown={(e)=>handlePress(e)}
            onChange={(event) => setForm({ ...form, contact: event.target.value })}
            id="outlined-basic" label="Contact" variant="outlined" />
          <Button onClick={addData} id='button' variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className='data'>
        <div className='data-heading' style={{ backgroundColor: "#22a6b3" }} >
          <h4 > Name</h4>
          <h4>Email</h4>
          <h4>Contact</h4>
          <h4>Remove</h4>
        </div>

        {
          data.map((element, index) => {
            return (
              <div key={index} className='data-heading'>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <h4>{element.contact}</h4>
                <Button onClick={() => removeItem(index)} variant="contained" color="error">
                  <DeleteIcon />
                </Button>
              </div>
            )
          })
        }
      </div>

    </>

  )
=]
}
