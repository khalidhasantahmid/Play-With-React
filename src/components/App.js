import React from "react";
import UserComments from './UserComments'
import SingleComment from './SingleComment'
import FunctionalComponent from './FunctionalComponent'
import SearchInput from "./SearchInput";

class App extends React.Component {

    onSearchSubmit = (entry) => {
        console.log('App', entry);
    }

    render() {
        return (
            <>
                <UserComments>
                <SingleComment 
                    avatar="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                    title='title 1'
                    description='description 1'
                />
                <SingleComment 
                    avatar="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
                    title='title 1'
                    description='description 1'
                />
                </UserComments>
                <FunctionalComponent />
                <hr />
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
            </>
            )
    }
}

export default App;