import { useEffect, useRef } from "react"
import { useLeafletContext } from '@react-leaflet/core'
import * as L from 'leaflet'


function getBounds(props) {
    return L.latLng(props.center).toBounds(props.size)
}

function Square(props) {
    const context = useLeafletContext()
    // use ref here causing the square element DOM is taken out from the Virtual DOM. Hence,
    // any manipulation to the react component is not re-render here. 
    const squareRef = useRef()

    useEffect(() => {
        squareRef.current = new L.Rectangle(getBounds(props))
        console.log(squareRef)
        const container = context.layerContainer || context.map
        container.addLayer(squareRef.current)

        return () => {
            container.removeLayer(squareRef.current)
        }
    }, [])

    return null
}


export default Square