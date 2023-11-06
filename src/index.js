import React from 'react'
import ReactDOM from 'react-dom'
import { Avatar } from 'antd'
import UserComments from './UserComments'
import SingleComment from './SingleComment'


const App = () => {
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
    </>
  );
}


export default ReactDOM.render(
    <App />,
    document.querySelector('#root')
)