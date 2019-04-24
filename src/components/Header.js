import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

const Header = ({onCreateNewItem}) => {
        return(
                <CardHeader  style={{ paddingBottom: '0px' }}
                        action={
                        <IconButton onClick={onCreateNewItem}> <AddCircleOutline /> </IconButton>
                        }
                        title="New List"
                />
        );
}

export default Header