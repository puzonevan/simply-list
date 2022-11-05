import JSConfetti from 'js-confetti';
import { useState } from 'preact/hooks';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { confetti, labels, labelsHex } from '../../constants';
import './style.css';

const jsConfetti = new JSConfetti()

const TaskList = ({todos, dispatch}) => {

    console.log(todos);

    return (
        <List 
            sx={{ 
                bgcolor: '#FAFAFA',
                height: 200 ,
                '& p:focus': {
                    outline: 'none'
                },
            }}
            elevation='4'
        >
            {
                todos.map((todo, index) => {
                    return <Task key={`task-${index}`} todo={todo}  dispatch={dispatch} />
                })
            }
        </List>
    )
}

const Task = ({todo, dispatch}) => {

    const [editable, setEditable] = useState(true);

    const checkboxColor = labels[labelsHex.findIndex((emoji) => emoji === todo.emoji)];

    const handleOnBeforeInput = (e) => {
        if (e.inputType === 'insertParagraph') {
            dispatch({ type: 'editItem', payload: {...todo, task: e.target.innerText}});
            e.preventDefault();
        }
        if (e.inputType === 'insertText' && e.target.innerText.length >= 30) e.preventDefault();
    }

    const handleOnInput = (e) => {
        if (e.target.innerText.length >= 30) {
            setEditable(false);
            dispatch({ type: 'editItem', payload: {...todo, task: e.target.innerText}});
            setTimeout(() => setEditable(true), 500);
        }
    }

    return (
        <ListItem
            alignItems='center'
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#FAFAFA' }}>{todo.emoji}</Avatar>
            </ListItemAvatar>
            <p 
                style={{ width: '0', flexGrow: 1 }}
                contentEditable={editable}
                onInput={handleOnInput}
                onBeforeInput={handleOnBeforeInput}
                onBlur={(e) => dispatch({ type: 'editItem', payload: {...todo, task: e.target.innerText}})}
            >
                {todo.task}
            </p>
            <Checkbox 
                value={`task ${todo.task}`}
                sx={{
                    '& > svg': { color: checkboxColor }
                }}
                inputProps={{
                    'aria-label': `task ${todo.task}`
                }}
                icon={<CircleOutlinedIcon color='primary' />}
                checkedIcon={<CheckCircleIcon />}
                onClick={() => {
                    jsConfetti.addConfetti({
                        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
                     })
                }}
            />
        </ListItem>
    )
}

export default TaskList;