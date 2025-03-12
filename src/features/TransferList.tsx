import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '../components/ui/carousel'
import Transfer from '../components/Transfer'
import { useState } from 'react'

const users = [
  { title: 'Employee', name: 'Lubaba', img: 'https://avatar.iran.liara.run/public?1' },
  { title: 'Employee', name: 'Firdause', img: 'https://avatar.iran.liara.run/public?2' },
  { title: 'Employee', name: 'Thazeem', img: 'https://avatar.iran.liara.run/public?3' },
  { title: 'Employee', name: 'Rahman', img: 'https://avatar.iran.liara.run/public?4' },
  { title: 'Employee', name: 'Arafath', img: 'https://avatar.iran.liara.run/public?5' },
  { title: 'Employee', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?6' },
  { title: 'Employee', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?7' }
]

const TransferList = () => {
  const [amount, setAmount] = useState(0)
  return (
    <div className="bg-white w-[600px] py-2 rounded-3xl shadow-xl flex flex-col justify-center">
      <div className="px-6 py-4">
        <Carousel>
          <CarouselContent>
            {users.map((user, index) => (
              <CarouselItem
                key={index}
                className="min-w-40 hover:rounded-xl justify-center basis-1/3 flex"
              >
                <Transfer name={user.name} title={user.title} img={user.img} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="disabled:hidden left-[-20px] w-12 h-12 shadow-xl border-0" />
          <CarouselNext className="disabled:hidden right-[-20px] w-12 h-12 shadow-xl border-0" />
        </Carousel>
      </div>
      <div className="px-6 py-4 flex justify-between gap-4 items-center">
        <p className="">Write Amount</p>
        <div className="flex-1 flex gap-2 bg-gray-200 rounded-full">
          <input
            value={amount}
            onChange={(e) => setAmount(isNaN(+e.target.value) ? amount : Number(e.target.value))}
            placeholder="525.00"
            className="p-2 px-4 rounded-full outline-none flex-1 bg-gray-200"
          />
          <button
            type="submit"
            className="flex text-white justify-center gap-4 items-center h-[60px] rounded-full bg-gray-800 px-[32px]"
          >
            Send <img src="sender.png" alt="" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TransferList
