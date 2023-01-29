import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  redirect,
  json,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({data, method}) {
  const info = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {info && info.errors && (
        <ul>
          {Object.values(info.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={data ? data.id : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={data ? data.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={data ? data.title : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={data ? data.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" disabled={isSubmitting} onClick={cancelHandler}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
        <button disabled={isSubmitting}>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({request, params}) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventId = params.eventId;

    url = "http://localhost:8080/events/" + eventId;
  }
  const respons = await fetch(url, {
    method,
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
