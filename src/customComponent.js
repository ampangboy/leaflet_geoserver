import { createElementHook, createLeafComponent, createPathHook, useLayerLifecycle, useLeafletContext } from '@react-leaflet/core'
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
const useSquare = createPathHook(useSquareElement)
const Square = createLeafComponent(useSquare)


export default Square