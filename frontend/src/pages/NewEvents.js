import React from "react";
import EventForm from "../components/EventForm";
import {json, redirect} from "react-router-dom";
const NewEventsPage = () => {
  return <EventForm />;
};

export default NewEventsPage;

export async function action({request, params}) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const respons = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (respons.status === 422) {
    return respons;
  }
  if (!respons.ok) {
    throw json({message: "Could not save event."}, {status: 500});
  }
  return redirect("/events");
}
