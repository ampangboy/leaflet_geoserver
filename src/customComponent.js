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

    // this propsRef is created for the purpose of tracking the changes in the props. If the
    // props did changed, then useEffect will update the squareRef which have been taken out
    // of Virtual DOM.
    const propsRef = useRef(props)

    useEffect(() => {
        squareRef.current = new L.Rectangle(getBounds(props))
        const container = context.layerContainer || context.map
        container.addLayer(squareRef.current)

        return () => {
            container.removeLayer(squareRef.current)
        }
    }, [])

    useEffect(() => {
        if (
            props.center !== propsRef.current.center ||
            props.size !== propsRef.current.size
        ) {
            // Note that this is not happening within the Virtual DOM
            squareRef.current.setBounds(getBounds(props))
        }

        // after the changes to props is assigned to the squareRef, we need to asigned to the
        // current props ref, so that if the new props is received, then the props can be 
        // compare again
        propsRef.current = props
    }, [props.center, props.size])

    return null
}


export default Square