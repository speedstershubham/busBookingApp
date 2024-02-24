import { useAtom, atom } from 'jotai'
import TUser from '../types/TUser'
import getNewUserList from '../helpers/getNewUserList'
import { useEffect, useState } from 'react'
import IFormData from '../types/IFormData'
import useSeats from './useSeat'
import DeckTypes from '../components/Bus/DeckTypes'
import TSeat from '../types/TSeat'

const usersAtom = atom<TUser[]>([])

interface IUseBookingResponse {
    formData: IFormData[]
    saveBooking: (newData: IFormData, seatDetail: TSeat) => void
}

const useBooking = (): IUseBookingResponse => {
    const [formData, setFormData] = useState<IFormData[]>([])
    const { updateSeatData } = useSeats({
        deckType: DeckTypes.LOWER_DECK,
    })

    useEffect(() => {
        // Retrieve data from localStorage
        const existingFormData = localStorage.getItem('formData')
        if (existingFormData) {
            // Parse the data if it exists
            const parsedFormData: IFormData[] = JSON.parse(existingFormData)
            setFormData(parsedFormData)
        }
    }, [])

    const saveBooking = (newData: IFormData, seatDetail: TSeat): void => {
        let storedFormData: IFormData[] = []
        const existingFormData = localStorage.getItem('formData')
        if (existingFormData) {
            storedFormData = JSON.parse(existingFormData)
        }
        // Push each form data separately instead of pushing the whole array
        storedFormData.push(newData)
        localStorage.setItem('formData', JSON.stringify(storedFormData))
        updateSeatData(seatDetail.seatNumber, {
            userId: newData._id,
            available: false,
        })
    }

    return { formData, saveBooking }
}

export default useBooking
