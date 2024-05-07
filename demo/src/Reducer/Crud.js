let initialState = {
    users : JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [],
    user : {}
}


const Crud = (state = initialState,action) => {
    switch(action.type){
        case  'adduser' :
           let data = action.payload;
           let all = [...state.users,data];
            localStorage.setItem('user',JSON.stringify(all));
        return {
            ...state,
            users : all
        }


        case 'viewuser':
        return state;


        case 'deleteuser':
            let id = action.payload
            let d = state.users.filter((item)=>{
                return item.id !== id
            })
            localStorage.setItem('user',JSON.stringify(d));
            return {
                ...state,
                users : d
            }
            
        case 'edituser':
            let userid = action.payload
            let e = state.users.find(item => item.id == userid)
            return {
                ...state,
                user : e
            }
    

            case 'updateuser':
                let upid = action.payload.id;
                let update = state.users.map((val)=>{
                    if(val.id == upid){
                        return{
                            ...val,
                            name : action.payload.name,
                            phone : action.payload.phone
                        }
                    }
                    return val;
                })
                localStorage.setItem('user',JSON.stringify(update));
                return {
                    ...state,
                    users : update
                }
        


        default :
        return state
    }
}
export default Crud
