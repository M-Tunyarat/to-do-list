import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


const Header = ({addTodo}) => {
        return(
                <CardHeader  style={{ paddingBottom: '0px' }}
                        action={
                        <IconButton onClick={addTodo}> <AddIcon /> </IconButton>
                        }
                        title="To-do-list"
                />
        );
}

export default Header