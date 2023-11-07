import React from 'react'
import ReactDOM from 'react-dom'
import UserComments from './UserComments'
import SingleComment from './SingleComment'
import FunctionalComponent from './FunctionalComponent'


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

      <FunctionalComponent />
    </>
  );
}


export default ReactDOM.render(
    <App />,
    document.querySelector('#root')
)