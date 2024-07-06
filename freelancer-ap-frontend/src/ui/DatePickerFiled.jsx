import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerFiled({ label, date, setDate }) {
  return (
    <div className="">
      <span className="mb-2 block text-secondary-700">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textFiled__input"
        calendarPosition="bottom-center"
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locales={persian_fa}
      />
    </div>
  );
}

export default DatePickerFiled;
