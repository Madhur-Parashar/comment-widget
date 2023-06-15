export default function Input({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  id,
  formClassName = "",
  inputClassName = ""
}) {
  return (
    <div className={`form ${formClassName}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className={`input-form ${inputClassName}`}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
      />
    </div>
  );
}
