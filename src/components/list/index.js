import JSConfetti from 'js-confetti';
import { useState } from 'preact/hooks';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import './style.css';

const jsConfetti = new JSConfetti()

const colors = ['#dd2e44', '#ffac33', '#fdcb58', '#78b158', '#55acee'];
const colorEmojis = ['🔴', '🟠', '🟡', '🟢', '🔵'];
const emojis = ['🌈', '⚡️', '💥', '✨', '💫', '🌸'];

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
            {todos.map((todo, index) => <Task todo={todo} key={`task-${index}`} dispatch={dispatch} />)}
        </List>
    )
}

const Task = ({todo, dispatch}) => {

    const [editable, setEditable] = useState(true);
    // console.log(todo.task);

    const checkboxColor = colors[colorEmojis.findIndex((emoji) => emoji === todo.emoji)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const handleKeyDown = (e) => {
        // todo.task = task;
        // if (e.key === 'Enter') dispatch({ type: 'editItem', todo })
    }

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
    
    // const handleOnFocusOut

    return (
        <ListItem
            alignItems='center'
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#FAFAFA' }}>{randomEmoji}</Avatar>
            </ListItemAvatar>
            <p 
                style={{ width: '0', flexGrow: 1 }}
                contentEditable={editable}
                onKeyDown={handleKeyDown}
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