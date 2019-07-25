export const ADD_FEATURE = "ADD_FEATURE";
export const SUBTRACT_FEATURE = "SUBTRACT_FEATURE";

export function addFeature(item){
    return {type: ADD_FEATURE, payload: item}
}

export function subtractFeature(item){
    return {type: SUBTRACT_FEATURE, payload: item}
}