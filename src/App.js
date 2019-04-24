import React, { Component } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import List from './components/List';
import Header from './components/Header';
import CompletedSection from './components/CompletedSection'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [{
                title: 'New Task 1', 
                isCompleted: true,
                isDeleted:false
            }, {
                title: 'New Task 2', 
                isCompleted: false,
                isDeleted:false
            }, {
                title: 'New Task 3', 
                isCompleted: false,
                isDeleted:false
            }, {
                title: 'New Task 4', 
                isCompleted: true,
                isDeleted:false
            }],
            showCompleted: false
        }
    }

    setNumberOfTask = () => {
        return this.state.list.length + 1
    }

    onCreateNewItem = () => {
        this.setState({
            list: [...this.state.list, {title: 'New Task ' + this.setNumberOfTask(), isCompleted: false, isDeleted: false}]
        })
    }

    onToggleCompletedList = () => {
        this.setState({
            showCompleted: this.state.showCompleted === false ? true : false
        })
        return this.state.showCompleted
    }

    onToggleListItem = (id) => {
        this.state.list[id].isCompleted = this.state.list[id].isCompleted === true ? false : true
        this.setState({
            list: [...this.state.list]
        })
    }

    onEditTask = (id, e) => {
        this.state.list[id].title = e.target.value
        this.setState({
            list: [...this.state.list]
        })
    }

    onDeleteTask = (id) => {
        let confirmDelete = window.confirm("Do you want to delete?")
        console.log()
        if (confirmDelete) {
            this.state.list[id].isDeleted = this.state.list[id].isDeleted === true ? false : true
            //this.state.list.splice(e, 1)
            this.setState({
            list: [...this.state.list]
            })
        }
        
    }

    newListIndex = () => {
        return this.state.list.map((data, index) => {
            data.id = index
            return data
        })
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={6} style={{margin: 'auto', marginTop: '40px'}}>
                    <Card>
                        <Header onCreateNewItem={this.onCreateNewItem}/>
                        <CardContent>
                            <CompletedSection list={this.newListIndex} onToggleCompletedList={this.onToggleCompletedList} onDeleteTask={this.onDeleteTask} onToggleListItem={this.onToggleListItem} onEditTask={this.onEditTask}/>
                            <List list={this.newListIndex} isCompleted={false} onDeleteTask={this.onDeleteTask} onToggleListItem={this.onToggleListItem} onEditTask={this.onEditTask}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default App;
