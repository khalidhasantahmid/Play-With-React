import React from "react";
import UserComments from './UserComments'
import SingleComment from './SingleComment'
import FunctionalComponent from './FunctionalComponent'
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {

    state = { images:[] }

    onSearchSubmit = async (entry) => {
        console.log('App', entry);

        const hostUrl = process.env.REACT_APP_PIXABAY_HOST_URL
        const key     = process.env.REACT_APP_PIXABAY_API_KEY
        const params  = `?key=${key}&q=${entry}&image_type=photo&pretty=true&per_page=50`

        const response = await axios.get(hostUrl + '/' + params)
        console.log(response);

        this.setState({images:response.data.hits})
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
                <ImageList images={this.state.images}/>
            </>
            )
    }
}

export default App;