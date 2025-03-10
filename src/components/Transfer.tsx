interface TransferProps {
  name: string
  title: string
  img?: string
}

function Transfer(props: TransferProps) {
  const { img = 'https://avatar.iran.liara.run/public?2' } = props
  return (
    <div id="Transfer-parent" className="flex flex-col items-center w-full">
      <div id="Transfer-avatar" className="w-20 h-20 rounded-full bg-red-900">
        <img src={img} alt="" />
      </div>
      <p id="name" className="">
        {props.name}
      </p>
      <p id="title" className="">
        {props.title}
      </p>
    </div>
  )
}

export default Transfer
