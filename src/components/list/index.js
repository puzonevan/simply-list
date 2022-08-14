import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Checkbox from '@mui/material/Checkbox';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ListItemText from '@mui/material/ListItemText';

const TaskList = ({todos}) => {
    return (
        <List sx={{ bgcolor: '#FAFAFA', height: 200, overflow: 'scroll' }} elevation='4' >
            {todos.map((todo, index) => <Task todo={todo} key={`task-${index}`} />)}
        </List>
    )
}

const Task = ({todo}) => {
    return (
        <ListItem
            alignItems='center'
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#FAFAFA' }}>{todo.emoji}</Avatar>
            </ListItemAvatar>
            <ListItemText secondary={todo.task} />
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