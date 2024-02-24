/* eslint-disable prettier/prettier */
import TSeat from '../types/TSeat'
import seatData from '../dummyData/seatData'
import { Dispatch, SetStateAction, useState } from 'react'
import DeckTypes from '../components/Bus/DeckTypes'


interface IUseSeatsParams {
  deckType: DeckTypes | undefined
}
interface IUseSeatsResponse {
  seats: TSeat[]
  setSeats: Dispatch<SetStateAction<TSeat[]>>
}

const useSeats = ({ deckType }: IUseSeatsParams): IUseSeatsResponse => {
  const [seats, setSeats] = useState<TSeat[]>(seatData)

  const filteredSeats = seats?.filter((seat) => seat.deck === deckType)

  return { seats: filteredSeats, setSeats }
}

export default useSeats
