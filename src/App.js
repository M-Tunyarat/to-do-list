import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import List from './components/List';
import Header from './components/Header';
import Selection from './components/Selection'
import './App.css';

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

    addTodo = () => {
        this.setState({
            list: [...this.state.list, {title: 'New Task ' + this.state.list.length ++ , isCompleted: false, isDeleted: false}]
        })
    }

    completeList = () => {
        this.setState({
            showCompleted: this.state.showCompleted === false ? true : false
        })
        return this.state.showCompleted
    }

    listItem = (id) => {
        this.state.list[id].isCompleted = this.state.list[id].isCompleted === true ? false : true
        this.setState({
            list: [...this.state.list]
        })
    }

    delTodo = (id) => {
        let del = window.confirm("Oop! Delete")
        if (del) {
            this.state.list[id].isDeleted = this.state.list[id].isDeleted === true ? false : true
            this.setState({
            list: [...this.state.list]
            })
        }
        
    }

    indexList = () => {
        return this.state.list.map((data, index) => {
            data.id = index
            return data
        })
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={8} style={{margin: 'auto', marginTop: '40px'}}>
                    <Card style={{backgroundColor: '#F5CFCF'}}>
                        <Header addTodo={this.addTodo}/>
                        <CardContent>
                            <Selection list={this.indexList} completeList={this.completeList} delTodo={this.delTodo} listItem={this.listItem}/>
                            <List list={this.indexList} isCompleted={false} delTodo={this.delTodo} listItem={this.listItem}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default App;
