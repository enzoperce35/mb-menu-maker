const ScheduleSetter = ({item, updateSessionStorage, schedule = ''}) => {

  return (
    <div className="container">
      <div className="schedule_setter">
        <select defaultValue={schedule === null ? 'Unset' : schedule} id="timeAvailable" name={'timeAvailable'} onChange={(e) => updateSessionStorage(item, e.target.value)} >
          <option key={'Unset'} value=""></option>
          <option key={"9AM"} value="9AM">9AM</option>
          <option key={"10AM"} value="10AM">10AM</option>
          <option key={"11AM"} value="11AM">11AM</option>
          <option key={"12PM"} value="12PM">12PM</option>
          <option key={"1PM"} value="1PM">1PM</option>
          <option key={"2PM"} value="2PM">2PM</option>
          <option key={"3PM"} value="3PM">3PM</option>
          <option key={"4PM"} value="4PM">4PM</option>
          <option key={"5PM"} value="5PM">5PM</option>
          <option key={"6PM"} value="6PM">6PM</option>
          <option key={"7PM"} value="7PM">7PM</option>
        </select>
      </div>
    </div>
  );
};

export default ScheduleSetter;
