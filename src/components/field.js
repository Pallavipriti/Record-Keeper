import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Field = ( {name,email,contact,index}) => {
  return (
    <div className='data-heading'>
  <h4>{name}</h4>
  <h4>{email}</h4>
  <h4>{contact}</h4>
  <Button variant="contained" color="error">
        <DeleteIcon/>
      </Button>
  </div>
  )
}

export default Field