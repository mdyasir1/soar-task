interface TransferProps {
  name: string
  title: string
  img?: string
}

function Transfer(props: TransferProps) {
  const { img = 'https://avatar.iran.liara.run/public?' } = props
  return (
    <div
      id="Transfer-parent"
      className="flex flex-col items-center w-1/2 hover:bg-gray-400
    "
    >
      <div id="Transfer-avatar" className="w-20 h-20 rounded-full bg-red-900">
        <img src={img} alt="" />
      </div>
      <p id="name" className="font-light">
        {props.name}
      </p>
      <p id="title" className="font-light text-blue-800">
        {props.title}
      </p>
    </div>
  )
}

export default Transfer
