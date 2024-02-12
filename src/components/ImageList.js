import React from 'react';
import { Image, Col, Divider, Row } from 'antd';

const ImageList = (props) => {

    console.log(props.images);

    const images = props.images.map((image) => {
        return <Col className="gutter-row" span={6} key={image.id}>
                    <Image width={350} style={{padding:'8px'}} src={image.webformatURL}/>
                </Col>
    })

    return ( 
        <div>
            {/* {images} */}

            <Divider orientation="left">Responsive</Divider>
            <Row
                gutter={{
                    xs: 12,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
                >
                {images}
            </Row>

        </div>
    );
}
 
export default ImageList;