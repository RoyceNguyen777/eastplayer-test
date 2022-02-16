import { Col, Icon, List, message, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { colors } from '../../assets'
import APIService from '../../services/APIServices'
import ISearch from '../components/ISearch'
import ITitle from '../components/ITitle'

export default function Country() {
  const history = useHistory()
  const [search, setSearch] = useState("");
  const [data, setData] = useState([])
  const [loadinglist, setLoadingList] = useState(false)
  const getListCountry = async (country) => {
    try {
      setLoadingList(false)
      const dataAPI = await APIService._getListCountry(country)
      setData(dataAPI.data[0])
      setLoadingList(true)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getListCountry()
    console.log(data)
  }, [data])
  const { altSpellings } = data
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
              title="Country"
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
                    message.warning("Xin hãy nhập Quốc Gia", 5)
                  } else {
                    setSearch("")
                    getListCountry(search)
                  }
                  return
                }}
              >
                Search
              </div>
            }
          />
        </div>

      </Col>
      <Col span={24} >
        <div style={{ margin: "40px 16px" }}>
          <List
            size="large"
            bordered
            dataSource={altSpellings}
            loading={loadinglist}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>

      </Col>
    </Row >
  )
}
