import { useEffect } from "react"
import { useLeafletContext } from '@react-leaflet/core'
import * as L from 'leaflet'

function Square(props) {
    const context = useLeafletContext()

    useEffect(() => {
        const bounds = L.latLng(props.center).toBounds(props.size)
        const square = new L.Rectangle(bounds)
        const container = context.layerContainer || context.map
        container.addLayer(square)

        return () => {
            container.removeLayer(square)
        }
    })

    return null
}


export default Square