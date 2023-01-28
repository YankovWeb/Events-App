import {RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventsDetailPage from "./pages/EventsDetail";
import NewEventsPage from "./pages/NewEvents";
import EditEventsPage from "./pages/EditEvents";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {index: true, element: <EventsPage />},
          {path: ":eventId", element: <EventsDetailPage />},
          {
            path: "new",
            element: <NewEventsPage />,
          },
          {
            path: ":eventId/edit",
            element: <EditEventsPage />,
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
