interface RegisterInputProps {
    setData: any;
    dataval: any;
    name: string;
    placeholder: string;
    required?: boolean
}

export default function RegisterInput(props: RegisterInputProps) {
    return (
        <div className="mb-3">
            <label>{props.name.toUpperCase()}</label>
          <input
            type={"text"}
            placeholder={`${props.placeholder}...`}
            required={props.required}
            onChange={(e: any) =>
              props.setData((data) => ({
                ...data,
                [props.name]: e.target.value,
              }))
            }
            value={props.dataval[props.name]}
          />
        </div>
    )
}