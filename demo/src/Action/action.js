export const ADD_USER = (data) => {
    return {
        type : 'adduser',
        payload : data
    }
}

export const VIEW_USER = () => {
    return {
        type : 'viewuser'
    }
}

export const DELETE_USER = (id) => {
    return {
        type : 'deleteuser',
        payload : id
    }
}

export const EDIT_USER = (id) => {
    return {
        type : 'edituser',
        payload : id
    }
}

export const UPDATE_USER = (data) => {
    return {
        type : 'updateuser',
        payload : data
    }
}
