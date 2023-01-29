import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({data}) {
  const info = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="post" className={classes.form}>
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
