import { Col, Icon, Row } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { colors } from '../../assets'
import ITitle from '../components/ITitle'
import { MenuStt, MenuTitle } from '../components/styled-components/MenuStt'

export default function Home() {
    const history = useHistory()
    const menuData = [
        {
            key: 1,
            value: "Todolist"
        },
        {
            key: 2,
            value: "Country List"
        },
        {
            key: 3,
            value: "Image gallery"
        },
    ]
    return (
            <Row>
                <Col span={24}>
                    <div style={{ textAlign: "center" }}>
                        <ITitle
                            level={1}
                            title="Eastplayers Test"
                            color={colors.red}
                            boild={800}
                            style={{
                                lineHeight: "150%",
                                marginBottom: "40px"
                            }}
                        />
                    </div>
                </Col>
                <Col span={24}>
                    <div style={{ margin: "0px 16px" }}>
                        {menuData.map((item, index, obj) => {
                            const stt = index + 1
                            return (
                                <div
                                    key={item.key}
                                    style={{
                                        boxShadow: "0px 4px 18px rgba(146, 116, 114, 0.15)",
                                        backgroundColor: colors.white,
                                        margin: "15px 0px",
                                        padding: "25px",
                                        cursor: "pointer",
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                    onClick={() => {
                                        history.push(
                                            item.key === 1 ? "/todolist"
                                                : item.key === 2 ? "/country" :
                                                    item.key === 3 ? "/image" : ""
                                        )
                                    }}
                                >
                                    <div>
                                        <MenuStt>{stt}</MenuStt>
                                        <MenuTitle>{item.value}</MenuTitle>
                                    </div>
                                    <Icon type="right" style={{ fontSize: '20px', color: colors.red }} theme="outlined" />
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
    )
}
