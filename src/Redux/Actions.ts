
export const NavManagement=()=>{
    return({
        type:'NAV'
    })
}

export const lenguajeChange=(title:String)=>{
    return ({
        payload:title==='ES'?'EN':'ES',
        type:'LENG'
    })
}




