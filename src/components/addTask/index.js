import './style.css'
import { useState } from 'preact/hooks';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AddTask = () => {

    const [color, setColor] = useState('🔴');
    const [task, setTask] = useState('');
    
    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <FormControl  sx={{ minWidth: 60 }} size="small">
                <Select
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                    displayEmpty
                >
                    <MenuItem value={'🔴'}>🔴</MenuItem>
                    <MenuItem value={'🟠'}>🟠</MenuItem>
                    <MenuItem value={'🟡'}>🟡</MenuItem>
                    <MenuItem value={'🟢'}>🟢</MenuItem>
                    <MenuItem value={'🔵'}>🔵</MenuItem>
                </Select>
            </FormControl>
            <TextField 
                sx={{
                    input: {color: '#333'}
                }}
                variant="outlined" 
                size="small" 
                defaultValue="Eat a snack"
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />
            <Button variant="outlined">Add Task</Button>
        </Box>
    )
}

export default AddTask;
