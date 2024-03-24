import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";

//Render the input data on the calendar somehow.
//Fix the current date check issue.

export default function Sidebar() {
  var id = 1; //Temporary. Get rid of this when porting the app on to a backend.
  const currentDate = new Date();
  const [showModal, setShowModal] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [allDay, setAllDay] = useState(true);
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [bgColor, setBgColor] = useState("#3b82f6");

  const handleCheckbox = (data) => {
    setAllDay(!allDay);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  function handleSubmit() {
    if (eventName == "") {
      alert("Please provide an event name");
    }
    else if (eventStartTime > eventEndTime) {
      alert("Event start time cannot be later than or equal to event end time");
    }
    else if (eventStart > eventEnd) {
      alert("Event start date cannot be later than or equal to event end date");
    }
    else if (eventStart < currentDate) {
      alert("Event start date cannot be earlier than current date");
    }
    else if (eventEnd < currentDate) {
      alert("Event end date cannot be earlier than current date");
    }
    else {
      var newEvent = null;
      id += 1;
      newEvent = {
        id: id.toString(),
        title: eventName.toString(),
        allDay: allDay,
        backgroundColor: bgColor.toString(),
        borderColor: bgColor.toString(),
      }
      if (allDay === true) {
        newEvent["start"] = eventStart.toString();
        newEvent["end"] = eventEnd.toString();
      }
      else {
        newEvent["startStr"] = eventStart.toString() + "T" + eventStartTime.toString();
        newEvent["endStr"] = eventEnd.toString() + "T" + eventEndTime.toString();
      }
      //Send the form data to backend here.
      console.log(newEvent);
    }
    handleCloseModal();
  }


  return (
    <div className="">
      <button type="button"
        className='bg-blue-500 text-white rounded p-2'
        id="addEvent"
        onClick={() => setShowModal(true)}
      >Add Event</button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-700 outline-none focus:outline-none">
                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Create New Event
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className='space-y-3' method="post" onSubmit={handleSubmit}>
                    <div className="flex justify-between space-x-10">
                      <label htmlFor="eventName" className='text-white'>Event Name</label>
                      <input type="text"
                        name="eventName"
                        id="eventName"
                        className="p-1 rounded"
                        required={true}
                        onChange={(e) => setEventName(e.target.value)} />
                    </div>
                    <div className="flex justify-between">
                      <label htmlFor="eventStart" className='text-white'>Event Start</label>
                      <input type="date"
                        name="eventStart"
                        id="eventStart"
                        className="p-1 rounded"
                        required={true}
                        onChange={(e) => setEventStart(e.target.value)} />
                    </div>
                    <div className="flex justify-between">
                      <label htmlFor="eventEnd" className='text-white'>Event End</label>
                      <input type="date"
                        name="eventEnd"
                        id="eventEnd"
                        className="p-1 rounded"
                        required={true}
                        onChange={(e) => setEventEnd(e.target.value)} />
                    </div>
                    <div className="flex justify-between">
                      <label htmlFor="eventAllDay" className='text-white'>All Day</label>
                      <input type="checkbox"
                        name="eventAllDay"
                        id="eventAllDay"
                        className="p-1 rounded"
                        value={allDay} 
                        defaultChecked={allDay} 
                        onChange={() => handleCheckbox((allDay) => !allDay)} />
                    </div>
                    {allDay ? (
                      <>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between">
                          <label htmlFor="eventStartTime" className='text-white'>Event Start Time</label>
                          <input type="time"
                            name="eventStartTime"
                            id="eventStartTime"
                            className="p-1 rounded"
                            required={true}
                            onChange={(e) => setEventStartTime(e.target.value)} />
                        </div>
                        <div className="flex justify-between">
                          <label htmlFor="eventEndTime" className='text-white'>Event End Time</label>
                          <input type="time"
                            name="eventEndTime"
                            id="eventEndTime"
                            className="p-1 rounded"
                            required={true}
                            onChange={(e) => setEventEndTime(e.target.value)} />
                        </div>
                      </>
                    )}
                    <div className="flex justify-between">
                      <label htmlFor="eventColor" className='text-white'>Event Color</label>
                      <HexColorPicker color={bgColor} onChange={setBgColor} />
                    </div>
                    <div className="flex justify-around p-4 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-white rounded p-3 bg-red-500 font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm p-3 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1"
                        type="submit"
                      >
                        Confirm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>

  );
}

