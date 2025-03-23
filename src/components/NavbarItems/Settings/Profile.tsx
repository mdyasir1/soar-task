interface propsTypes {
  labelType?: string
  labelName: string
  inputType?: string
  inputPlaceholder: string
}

function Profile(props: propsTypes) {
  return (
    <div id="parent" className="flex flex-col">
      <label htmlFor={props.labelType}>{props.labelName}</label>
      <input
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        className="h-14 border-black border rounded-xl px-3"
      />
    </div>
  )
}

export default Profile
