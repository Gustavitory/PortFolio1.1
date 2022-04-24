export interface initial{
    theme:String,
    lenguaje:String,
    open:Boolean
}
const initialState:initial={
    theme:'light',
    lenguaje:'ES',
    open:false
}



export const Reducer=(state=initialState,action:any)=>{
    switch (action.type){
        case('NAV'):
            return({
                ...state,
                open:!state.open
            })
        default:
            return state
    }
}