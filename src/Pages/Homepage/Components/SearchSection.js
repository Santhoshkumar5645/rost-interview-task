import React from 'react'
import { useForm } from "react-hook-form";

const SearchSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
      <>
        <div className='flex flex-col  justify-center items-center' >

        <form onSubmit={handleSubmit(onSubmit)} className=" max-md:space-y-2 rounded-xl absolute bg-white shadow-xl w-10/12 -mt-5 flex max-md:flex-col items-center justify-between gap-x-10 p-6">
      
      {/* Destination Dropdown */}
      <div className="flex flex-col w-full">
        <label htmlFor="destination" className="mb-2 text-sm font-medium">Destination</label>
        <select
          id="destination"
          {...register("destination", { required: "Please select a destination" })}
          className="bg-[#F0F0F0]  w-full p-2 rounded-lg"
        >
          <option value="">Destination</option>
          <option value="new-york">New York</option>
          <option value="paris">Paris</option>
          <option value="tokyo">Tokyo</option>
        </select>
        {errors.destination && <span className="text-red-600 text-sm">{errors.destination.message}</span>}
      </div>

      {/* Check-in Date */}
      <div className="flex flex-col w-full">
        <label htmlFor="checkin" className="mb-2 text-sm font-medium">Check In - Check Out:</label>
        <input
          type="date"
          id="checkin"
          {...register("checkin", { required: "Please select a check-in date" })}
          className="bg-[#F0F0F0]  w-full p-2 rounded-lg"
        />
        {errors.checkin && <span className="text-red-600 text-sm">{errors.checkin.message}</span>}
      </div>

      {/* Number of Persons Dropdown */}
      <div className="flex flex-col w-full">
        <label htmlFor="persons" className="mb-2 text-sm font-medium">No.of.Persons:</label>
        <select
          id="persons"
          {...register("persons", { required: "Please select the number of persons" })}
          className="bg-[#F0F0F0]  w-full p-2 rounded-lg"
        >
          <option value="1">1 Room, 1 Guest</option>
          <option value="2">1 Room, 2 Guests</option>
          <option value="3">2 Rooms, 3 Guests</option>
          <option value="4">2 Rooms, 4 Guests</option>
        </select>
        {errors.persons && <span className="text-red-600 text-sm">{errors.persons.message}</span>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="px-16 text-sm bg-[#28304C] text-white p-2 mt-6 rounded-md">
        Search
      </button>
    </form>

        </div>
      </>
  )
}

export default SearchSection