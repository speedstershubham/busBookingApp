import IBusData from '../types/IBusData'
import { atom, useAtom } from 'jotai'
import TSeat from '../types/TSeat'
import { Dispatch, SetStateAction } from 'react'

interface IUseProductResponse {
    busList: IBusData[]
    seatList: TSeat[]
    saveBus: (newData: IBusData) => void
    setSeatList: Dispatch<SetStateAction<TSeat[]>>
}

const busListAtom = atom<IBusData[]>([])
const seatListAtom = atom<TSeat[]>([])

const useBus = (): IUseProductResponse => {
    const [busList, setBusList] = useAtom(busListAtom)
    const [seatList, setSeatList] = useAtom(seatListAtom)

    const saveBus = (newData: IBusData): void => {
        console.log('newData', newData)

        busList.push(newData)
        // setProductList(productList)
    }

    return { busList, seatList, setSeatList, saveBus }
}

export default useBus
