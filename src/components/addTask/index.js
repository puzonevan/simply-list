import './style.css'
import { useState } from 'preact/hooks';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const AddTask = ({dispatch}) => {

    const [emoji, setEmoji] = useState('🔴');
    const [task, setTask] = useState('');

    const dispatchAdd = () => {
        const newItem = {
            emoji,
            task, 
            completed: false,
            editing: false,
        }
        dispatch({ type: 'addItem', payload: newItem})
    }

    const enterPressed = (event) => {
        if (event.key === 'Enter' && task !== '') dispatchAdd();
    }
    
    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <TextField 
                sx={{
                    input: {color: '#555'},
                    flexGrow: 2,
                    margin: '0 10px',
                }}
                variant="outlined" 
                size="small" 
                placeholder='Eat a snack'
                value={task}
                onChange={(event) => setTask(event.target.value)}
                onKeyPress={enterPressed}
            />
            <FormControl  sx={{ minWidth: 60 }} size="small">
                <Select
                    value={emoji}
                    onChange={(event) => setEmoji(event.target.value)}
                    displayEmpty
                >
                    <MenuItem value={'🔴'}>🔴</MenuItem>
                    <MenuItem value={'🟠'}>🟠</MenuItem>
                    <MenuItem value={'🟡'}>🟡</MenuItem>
                    <MenuItem value={'🟢'}>🟢</MenuItem>
                    <MenuItem value={'🔵'}>🔵</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default AddTask;
