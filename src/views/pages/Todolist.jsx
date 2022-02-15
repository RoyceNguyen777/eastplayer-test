import { Col, Icon, message, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { colors } from '../../assets'
import ISearch from '../components/ISearch'
import ITitle from '../components/ITitle'

export default function Todolist() {
    const history = useHistory()
    const [search, setSearch] = useState("");

    const [todolist, setTodoList] = useState([
        {
            todo: "Do Homework",
            isDone: false
        },
        {
            todo: "Coding",
            isDone: false
        }
    ])


    return (
        <Row>
            <Col span={24}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "40px"
                }}>
                    <div>
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
                    </div>
                    <div style={{ margin: "auto" }}>
                        <ITitle
                            level={1}
                            title="Todo List"
                            color={colors.red}
                            boild={800}
                            style={{
                                lineHeight: "150%",
                            }}
                        />
                    </div>
                </div>

            </Col>
            <Col span={24}>
                <div style={{ margin: "0px 16px" }}>
                    <ISearch
                        placeholder={"Search"}
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        icon={
                            <div
                                className="flex justify-center item-center"
                                style={{ width: 70, color: colors.red, fontWeight: "bolder" }}
                                onClick={() => {
                                    if (!search) {
                                        message.warning("Xin hãy nhập list ToDo", 5)
                                    } else {
                                        const newlist = {
                                            todo: search,
                                            isDone: false
                                        }
                                        todolist.push(newlist)

                                        setTodoList(todolist)
                                        setSearch("")
                                    }
                                    return
                                }}
                            >
                                Add
                            </div>
                        }
                    />
                    <div style={{ margin: "24px 0px" }}>
                        <ITitle
                            title={`There are ${0} tasks left out of ${0} tasks`}
                            level={2}
                        />
                    </div>
                    <div style={{ margin: "24px 0px" }}>
                        {todolist.map((item, index) => {
                            return (
                                <ul key={index}>
                                    <li
                                        className={!item.isDone ? "add_list" : "done_list"}
                                        onClick={() => {
                                            let newlist = {
                                                ...item,
                                                isDone: !item.isDone && true || item.isDone && false
                                            }
                                            todolist[index] = newlist
                                            let newmenu = [...todolist]
                                            setTodoList(newmenu)
                                        }}
                                    >
                                        {item.todo}
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </Col>
        </Row >
    )
}
