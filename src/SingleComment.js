import React from 'react'
import { Card, Avatar } from 'antd'

const { Meta } = Card;

const SingleComment = (props) => {
    
    return (
        <Card
            style={{
                width: 300,
                marginTop: 16,
            }}
        >
            <Meta
                avatar={<Avatar src={props.avatar} />}
                title={props.title}
                description={props.description}
            />
        </Card>
    )
}

export default SingleComment