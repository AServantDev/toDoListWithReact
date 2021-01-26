import React, { Component } from 'react'

 class ToDo extends Component {
     state = {
         element : '',
         items : []
     }

     onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
     }

     onSubmit = (e) => {
         e.preventDefault()
         this.setState({
             element: '',
              items: [...this.state.items, {element: this.state.element}]})
     }

     deleteItem = (index) => {
        const arr = this.state.items;
        arr.splice(index, 1)
        this.setState({items: arr})
     }

     renderList = () => {
         return this.state.items.map((item, index) =>{
            return (
                <div className='card mb-3' key={index}>
                    <div className='card-body'>
                        <h4>{item.element}
                        <i onClick={() => {this.deleteItem(index)}} className='fas fa-times' style={{cursor: 'pointer', float: 'right', color: 'red'}}/></h4>
                    </div>
                </div>
            )
         } )
     }

    render() {
        return (
            <div>
            <div className='card my-3'>
                <div className='card-header'>To do list</div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='element'>To do</label>
                            <input type='text'
                            className='form-control form-control-lg'
                            name='element'
                            onChange={this.onChange}
                            value={this.state.element}/>
                        </div>
                        <button className='btn btn-primary btn-block'>
                            Add
                        </button>
                    </form>
                </div>
            </div>
            {this.renderList()}
        </div>
        )
    }
}

export default ToDo