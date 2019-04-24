import React from 'react'
import ListItem from './ListItem'

const List = ({list, isCompleted, onDeleteTask, onToggleListItem, onEditTask}) => {
        return (
                list().filter((alllist) => !alllist.isDeleted).filter((data) => data.isCompleted === isCompleted).map((data, index) =>
                        <ListItem id={data.id} title={data.title} checkbox={data.isCompleted} key={index} onDeleteTask={onDeleteTask} onToggleListItem={onToggleListItem} onEditTask={onEditTask}></ListItem>
                )
        );
}

export default List