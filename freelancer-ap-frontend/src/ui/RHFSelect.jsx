function RHFSelect({ label, name, register, options, required}) {
  return (
    <div className="">
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select id={name} {...register(name)} className="w-full textField__input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
 
    </div>
  );
}

export default RHFSelect;
