import { useEffect, useState } from 'react'
import IFormData from '../types/IFormData'
import useSeats from './useSeat'
import DeckTypes from '../components/Bus/DeckTypes'
import TSeat from '../types/TSeat'
interface IUseBookingResponse {
    formData: IFormData[]
    saveBooking: (newData: IFormData, seatDetail: TSeat) => void
    deleteFormDataById: (id: string, seatNumber: number) => void
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

        // Check if there's already existing data with the same ID
        const existingIndex = storedFormData.findIndex(
            (data) => data._id === newData._id
        )

        if (existingIndex !== -1) {
            // If data with the same ID exists, replace it with the new data
            storedFormData[existingIndex] = newData
        } else {
            // If no data with the same ID exists, add the new data
            storedFormData.push(newData)
        }

        localStorage.setItem('formData', JSON.stringify(storedFormData))
        updateSeatData(seatDetail.seatNumber, {
            userId: newData._id,
            available: false,
        })
    }

    const deleteFormDataById = (id: string, seatNumber: number): void => {
        let storedFormData: IFormData[] = []
        const existingFormData = localStorage.getItem('formData')
        if (existingFormData) {
            storedFormData = JSON.parse(existingFormData)
        }

        // Find the index of the form data with the given ID
        const dataIndex = storedFormData.findIndex((data) => data._id === id)

        if (dataIndex !== -1) {
            // Remove the form data from the array if found
            storedFormData.splice(dataIndex, 1)
            localStorage.setItem('formData', JSON.stringify(storedFormData))
            updateSeatData(seatNumber, {
                userId: '',
                available: true,
            })
        } else {
            console.log(`Form data with ID ${id} not found.`)
        }
    }

    return { formData, saveBooking, deleteFormDataById }
}

export default useBooking
