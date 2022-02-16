import { Col, Icon, Row, } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { colors } from '../../assets'
import img from '../../services/mockdata'
import ITitle from '../components/ITitle'


export default function Img() {
    const history = useHistory()
    return (
        <Row>
            <Col span={24}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Icon
                        type="left"
                        style={{
                            fontSize: '16px',
                            color: colors.black,
                            fontWeight: "bolder",
                            cursor: "pointer"
                        }}
                        theme="outlined"
                        onClick={() => {
                            history.goBack()
                        }}
                    />
                    <ITitle
                        level={1}
                        title="Image Gallery"
                        color={colors.red}
                        boild={800}
                        style={{
                            lineHeight: "150%",
                            margin: "auto"
                        }}
                    />
                </div>


            </Col>
            <Col span={24}>
                <div style={{ margin: "40px 16px" }}>
                    {img.map(item => {
                        return (
                            <>
                                <img src={item.src} width="33.33%" />
                            </>
                        )
                    })}
                </div>
            </Col>
        </Row>
    )
}
