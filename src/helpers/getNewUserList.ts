import UserTypes from '../types/TUser'

const getNewUserList = (params: {
    userList?: UserTypes[]
    newUser: UserTypes
    _id?: string
}) => {
    const { userList, newUser, _id } = params
    if (!userList?.length) {
        return [newUser]
    }
    if (!_id) {
        return [...userList, newUser]
    }
    const updatedTodoList = userList.map((user) => {
        if (user._id === _id) {
            return { ...user, ...newUser }
        }
        return user // Return unchanged item
    })
    return updatedTodoList
}

export default getNewUserList
