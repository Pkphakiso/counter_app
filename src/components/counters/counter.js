import React, { Component } from 'react';
import '../counters/counter.css'

class Counter extends Component {
    // for reference on using the style
     styling={
        fontSize: 20,
        fontweight:"bold",
        margin:5
     };

    render() { 
        console.log(this.props.counter);
        return (
            <div>           
                <span style={this.styling} className={ this.getBadge() }> { this.formaCounter() }</span>
                {/* rize an events check the onclick ... use error function */}
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={()=> this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
        
            </div> 
        );
    }
    
    formaCounter = () => {
        const {value}= this.props.counter;
        return value === 0 ? "Zero": value;
    }

    getBadge() {
        const {value} =this.props.counter;
        let classes = 'badge m-2 ';
        classes =+ (value === 0) ? 'text-bg-warning' : 'text-bg-primary';
        return classes;
    }
}
 
export default Counter;