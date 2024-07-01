function TextFiled({ label, name, value, onChange }) {
  return (
    <div className="">
      <label className="mb-1" htmlFor={name}>
     
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        className="textFiled__input"
        type="text"
        name={name}
        autoComplete="off"
      />
    </div>
  );
}

export default TextFiled;
