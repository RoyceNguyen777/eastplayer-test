import React from 'react'
import styled from 'styled-components'
import { colors } from '../../assets'
import { IStyledSearch } from './styled-components/Search'

const IDiv = styled.div`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`
export default function ISearch(props) {
    const { icon, style } = props
    return (
        <IDiv
            style={{
                backgroundColor: colors.white,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
            }}
        >
            <IStyledSearch required {...props} style={{ ...style }} />
            <div style={{ textAlign: "center",}}>
                {icon}
            </div>

        </IDiv>
    )
}
