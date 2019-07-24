export const ADD_FEATURE = "ADD_FEATURE";

export function addFeature(item){
    return {type: ADD_FEATURE, payload: item}
}