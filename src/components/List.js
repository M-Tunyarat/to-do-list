import React from 'react'
import ListItem from './ListItem'

const List = ({list, isCompleted, delTodo, listItem}) => {
        return (
                list().filter((alllist) => !alllist.isDeleted).filter((data) => data.isCompleted === isCompleted).map((data, index) =>
                        <ListItem id={data.id} title={data.title} checkbox={data.isCompleted} key={index} delTodo={delTodo} listItem={listItem} ></ListItem>
                )
        );
}

export default List