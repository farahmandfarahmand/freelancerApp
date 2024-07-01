function RadioInput({label,value,name,id, onChange,checked}) {
    return ( 
        <div className="flex items-center gap-x-2 text-secondary-600">
              <input
                className="cursor-pointer w-4 h-4 form-radio focus:ring-indigo-400"
                name={name}
                id={id}
                value={value}
                type="radio"
                onChange={onChange}
                checked={checked}
              />
              <label htmlFor={id}>{label}</label>
            </div>
     );
}

export default RadioInput;