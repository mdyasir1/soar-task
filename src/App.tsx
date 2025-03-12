import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from './components/ui/carousel'
import Transfer from './components/Transfer'

const users = [
  { title: 'Employee', name: 'Lubaba', img: 'https://avatar.iran.liara.run/public?1' },
  { title: 'Employee', name: 'Firdause', img: 'https://avatar.iran.liara.run/public?2' },
  { title: 'Employee', name: 'Thazeem', img: 'https://avatar.iran.liara.run/public?3' },
  { title: 'Employee', name: 'Rahman', img: 'https://avatar.iran.liara.run/public?4' },
  { title: 'Employee', name: 'Arafath', img: 'https://avatar.iran.liara.run/public?5' },
  { title: 'Employee', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?6' },
  { title: 'Employee', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?7' }
]

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <Carousel
        // orientation="horizontal"
        // opts={{
        //   align: 'start',
        //   loop: true
        // }}
        >
          <CarouselContent>
            {users.map((user, index) => (
              <CarouselItem key={index} className="basis-1/3 flex justify-center">
                <Transfer name={user.name} title={user.title} img={user.img} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-input hover:bg-accent hover:text-accent-foreground absolute size-12 rounded-full bg-card border-0 shadow-xl top-1/2 -left-4 -translate-y-1/2" />
          <CarouselNext className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-input hover:bg-accent hover:text-accent-foreground absolute size-12 rounded-full bg-card border-0 shadow-xl top-1/2 -right-4 -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  )
}

export default App
