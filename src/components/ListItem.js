import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = {
        root: {
                padding: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '5px'
        },
        input: {
                marginLeft: 8,
                flex: 1,
                marginTop: '0px'
        },
        iconButton: {
                padding: 10,
                color: '#B00020'
        },
        divider: {
                width: 1,
                height: 28,
                margin: 4,
        },
        checkComplete: {
                color: '#03a9f4'
        }
};

const ListItem = ({id, title, checkbox, classes, onDeleteTask, onToggleListItem, onEditTask}) => {

        return (
                <Paper className={classes.root}>
                        <Checkbox
                                checked={checkbox}
                                onClick={() => onToggleListItem(id)}
                        />
                        <InputBase 
                                className={classes.input}
                                value={title}
                                placeholder={title}
                                fullWidth
                                onChange={(e) => onEditTask(id, e)}
                        />
                        <Divider className={classes.divider} />
                        <IconButton color="primary" className={classes.iconButton} aria-label="Directions" onClick={() => onDeleteTask(id)}>
                                <Delete/>
                        </IconButton>
                </Paper >
        )
}

export default withStyles(styles)(ListItem);