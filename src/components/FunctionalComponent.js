import React from 'react'
import { Button, Modal } from 'antd';

class FunctionalComponent extends React.Component {

    state = {isModalOpen: false}

    showModal = () => {
        return this.setState({isModalOpen: true})
    };
    handleOk = () => {
        return this.setState({isModalOpen: false})
    };
    handleCancel = () => {
        return this.setState({isModalOpen: false})
    };

    componentDidMount() {
        console.log('mounted')
    }

    componentDidUpdate() {
        console.log('updated')

        let modalStatus = this.state.isModalOpen ? 'Modal showing' : 'Modal is hidden'

        console.log(modalStatus)
    }
    
    render() {
        return(
            <>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal title="Basic Modal" open={this.state.isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </>
        )
    }
}


export default FunctionalComponent