import {RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, {loader as eventLoader} from "./pages/Events";
import EventsDetailPage, {
  loader as detailLoader,
  action as deleteEventAction,
} from "./pages/EventsDetail";
import NewEventsPage from "./pages/NewEvents";
import EditEventsPage from "./pages/EditEvents";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import {action as manipulateEventAction} from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: detailLoader,
            children: [
              {
                index: true,
                element: <EventsDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventsPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventsPage />,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
