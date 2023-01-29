import React from "react";
import {useRouteLoaderData} from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventsPage = () => {
  const data = useRouteLoaderData("event-detail");

  const event = data.event;

  return <EventForm data={event} />;
};

export default EditEventsPage;
