/* eslint-disable prettier/prettier */
import TSeat from '../types/TSeat'
import seatData from '../dummyData/seatData'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import DeckTypes from '../components/Bus/DeckTypes'
interface IUseSeatsParams {
  deckType?: DeckTypes | undefined
}
interface IUseSeatsResponse {
  seats: TSeat[]
  setSeats: Dispatch<SetStateAction<TSeat[]>>
  updateSeatData: (seatId: number, newData: Partial<TSeat>) => void
  // saveBooking: (seatId: number, newData: Partial<IFormData>) => void
}
const useSeats = ({ deckType }: IUseSeatsParams): IUseSeatsResponse => {

  const [seats, setSeats] = useState<TSeat[]>([]);

  useEffect(() => {
    const storedSeatData = localStorage.getItem('seatData');
    if (storedSeatData) {
      // Parse the stored data back to an array before setting
      setSeats(JSON.parse(storedSeatData));

    }
    else {
      localStorage.setItem('seatData', JSON.stringify(seatData));

    }
  }, [])

  const filteredSeats = seats?.filter((seat) => seat.deck === deckType)

  const updateSeatData = (seatNumber?: number, newData?: Partial<TSeat>): void => {
    // Retrieve seat data from local storage
    const storedSeatData: string | null = localStorage.getItem('seatData');

    if (storedSeatData) {
      // Parse the stored data into an array
      const seatDataArray: TSeat[] = JSON.parse(storedSeatData);

      // Find the seat with the given seatId
      const seatIndex: number = seatDataArray.findIndex(seat => seat.seatNumber === seatNumber);

      if (seatIndex !== -1) {
        // Update the seat with the new data
        seatDataArray[seatIndex] = { ...seatDataArray[seatIndex], ...newData };

        // Stringify the updated seat data
        const updatedSeatData: string = JSON.stringify(seatDataArray);

        // Set the updated seat data back into local storage
        localStorage.setItem('seatData', updatedSeatData);
      } else {
        console.error(`Seat with id ${seatNumber} not found.`);
      }
    }
  };



  return { seats: filteredSeats, setSeats, updateSeatData }
}

export default useSeats
