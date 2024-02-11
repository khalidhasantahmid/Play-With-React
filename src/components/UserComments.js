import React from 'react';
import { Card } from 'antd';

const UserComments = (props) => {
    return ( 
        <Card title="Card title">
            {props.children}
            {/* <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                Inner Card content
            </Card>
            <Card
            style={{
                marginTop: 16,
            }}
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
            >
            Inner Card content
            </Card> */}
        </Card>
    );
}
 
export default UserComments;