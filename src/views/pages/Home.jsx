import React from 'react'
import { colors } from '../../assets'
import ITitle from '../components/ITitle'

export default function Home() {
    return (
        <div style={{ padding: "20px" }} >
            <ITitle
                level={1}
                title="Eastplayers Test"
                color={colors.red}
                boild={900}
            />
        </div>
    )
}
