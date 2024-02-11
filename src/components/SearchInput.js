import React from "react";
import { Input, Space } from 'antd';

const { Search } = Input;

class SearchInput extends React.Component {

    state =  { entry:'' }

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.entry);
        this.props.onSearchSubmit(this.state.entry)
    }

    render() {
        return(
            <>
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <Search placeholder="input search text" 
                            onChange={(event) => this.setState({entry: event.target.value})} 
                            enterButton 
                            value={this.state.entry}
                        />
                    </form>
                </div>
            </>
        )
    }
}

export default SearchInput;