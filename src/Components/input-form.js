import React, {Component} from 'react';
import '../css/input-form.css';


export default class InputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            number : null
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChangeText = this.onValueChangeText.bind(this);
        this.onValueChangeNum = this.onValueChangeNum.bind(this);
    }

    onValueChangeText(e){
        this.setState({
            name: e.target.value
        })
    }

    onValueChangeNum(e){
        this.setState({
            number: e.target.value
        })
    }

   

    onSubmit(e){
        e.preventDefault();
        this.props.onAddPost(this.state.name, this.state.number);
        this.setState({
            name : '',
            number : null
        })
        
        
    }

    render(){
    return(
        <form className='input-form'
        onSubmit={this.onSubmit}>
            <input className='input-input'
            type="text"
            placeholder="Name Surname"
            onChange={this.onValueChangeText}
            value={this.state.name}
            />
            <input className='input-input'
            tupe="number"
            placeholder="Debt ?"
            onChange={this.onValueChangeNum}
            value={this.state.number}
            />
            <button>
                Add to list
            </button>
        </form>
    )
  } 
}

