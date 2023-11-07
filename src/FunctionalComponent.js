import React from 'react'
import { Button, Modal } from 'antd';

class FunctionalComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {isModalOpen: false}
    }

    showModal = () => {
        console.log('yoo');
        return this.setState({isModalOpen: true})
    };
    handleOk = () => {
        return this.setState({isModalOpen: false})
    };
    handleCancel = () => {
        return this.setState({isModalOpen: false})
    };

    
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