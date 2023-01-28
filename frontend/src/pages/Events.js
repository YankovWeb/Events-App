import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        <li>
          {DUMMY_EVENTS.map((e) => {
            return (
              <li key={e.id}>
                <Link to={e.id}>{e.title}</Link>
              </li>
            );
          })}
        </li>
      </ul>
    </>
  );
};

export default EventsPage;
