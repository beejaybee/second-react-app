import React from 'react';

class Filters extends React.Component {
    
    handlechange = (e) => {
        const value = e.target[e.target.type === "checkbox" ?  "checked" : "value"];
        const name = e.target.name;
        this.props.onFilter({
            [name]: value
        })
    }
    render() {
        return (
            <form>
                <input 
                type="text" 
                placeholder="Search..." 
                value={this.props.filterText}
                onChange={this.handlechange}
                name="filterText"
                />
                <p>
                    <label>
                        <input 
                        type="checkbox" 
                        checked={this.props.inStockOnly}
                        onChange={this.handlechange}
                        name="inStockOnly"
                        />
                        &nbsp;
                        only show products in stock
                    </label>
                </p>
            </form>
        )
    }    
}
export default Filters;