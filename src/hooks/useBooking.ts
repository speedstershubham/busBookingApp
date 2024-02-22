import { useAtom, atom } from 'jotai'
import TUser from '../types/TUser'
import getNewUserList from '../helpers/getNewUserList'

const usersAtom = atom<TUser[]>([])
const useBooking = () => {
    const [userList, setUserList] = useAtom(usersAtom)

    const saveUser = (newUser: TUser, _id?: string): void => {
        const _newTodoList = getNewUserList({
            userList: userList,
            newUser,
            _id,
        })
        setUserList(_newTodoList)
    }

    return { saveUser, userList }
}

export default useBooking
