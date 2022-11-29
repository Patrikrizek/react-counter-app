import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col-11">
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className='btn btn-secondary btn-sm m-1'
                    >
                        +
                    </button>

                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className={this.getButtonDisabled()}
                    >
                        -
                    </button>

                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className='btn btn-danger btn-sm m-1'
                    >
                        x
                    </button>
                </div>
            </div>
        );
    }

    getButtonDisabled() {
        let classes = 'btn btn-secondary btn-sm m-1 '
        classes += (this.props.counter.value === 0) ? 'disabled' : '';
        return classes;
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;