import React from 'react';
import { connect } from 'react-redux';

import { addSmurf, getSmurfs } from '../actions';

class NewSmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        }       
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const newSmurf = {...this.state}
        this.props.addSmurf(this.state)
        this.setState({ name: '', age: '', height: ''})
        
    }
    
    render() {
        return(
            <div className='new-smurf-form'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='name'
                        onChange={this.handleChange} 
                        value={this.state.name} 
                        placeholder='name' 
                    />
                        <input 
                        name='age' 
                        onChange={this.handleChange} 
                        value={this.state.age} 
                        placeholder='age' 
                    />
                        <input 
                        name='height' 
                        onChange={this.handleChange} 
                        value={this.state.height} 
                        placeholder='height' 
                    />
                    <button type='submit'>add smurf</button>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    { addSmurf }
    )(NewSmurfForm)
