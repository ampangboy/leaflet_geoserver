import { createElementHook, useLayerLifecycle, useLeafletContext } from '@react-leaflet/core'
import * as L from 'leaflet'


function getBounds(props) {
    return L.latLng(props.center).toBounds(props.size)
}

function createSquare(props, context) {
    return { instance: new L.Rectangle(getBounds(props)), context }
}

function updateSquare(instance, props, prevProps) {
    if (props.center !== prevProps.center || props.size !== prevProps.size) {
        instance.setBounds(getBounds(props))
    }
}

// createElementHook require two function as arguement, createSquare and updateSquare.
// This hook can be place inside the Square component. However, its taken out out of 
// purpose of code readability. Its abstracting away react hook which require less line
// of code.
const useSquareElement = createElementHook(createSquare, updateSquare)

function Square(props) {
    const context = useLeafletContext()
    const elementRef = useSquareElement(props, context)

    // useLayerLifecycle hook completly remove the need to use react hook. It support adding
    // remove layer from parent container or the map
    useLayerLifecycle(elementRef.current, context)

    return null
}


export default Square