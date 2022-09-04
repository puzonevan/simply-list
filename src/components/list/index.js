import './style.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Checkbox from '@mui/material/Checkbox';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

const TaskList = ({todos, dispatch}) => {

    return (
        <List sx={{ bgcolor: '#FAFAFA', height: 200  }} elevation='4' >
            {todos.map((todo, index) => <Task todo={todo} key={`task-${index}`} dispatch={dispatch} />)}
        </List>
    )
}

const Task = ({todo, dispatch}) => {

    return (
        <ListItem
            alignItems='center'
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#FAFAFA' }}>{todo.emoji}</Avatar>
            </ListItemAvatar>
            {
                todo.editing ? 
                <TextField id="todo-task" defaultValue={todo.task} variant="standard" fullWidth autoFocus /> : 
                <ListItemText secondary={todo.task} onClick={() => dispatch({ type: 'editItem', payload: todo })} />
            }
            <Checkbox 
                value={`task ${todo.task}`}
                inputProps={{
                    'aria-label': `task ${todo.task}`
                }}
                icon={<CircleOutlinedIcon color='primary' />}
                checkedIcon={<CheckCircleIcon />}
            />
        </ListItem>
    )
}

export default TaskList;