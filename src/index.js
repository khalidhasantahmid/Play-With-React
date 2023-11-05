import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {

    const sampleText = 'random text';

    return (
        <> 
            <h1 style={{color: 'red'}} className='font-big'>
                {sampleText} 
            </h1>
        </>
    )
}


export default ReactDOM.render(
    <App />,
    document.querySelector('#root')
)