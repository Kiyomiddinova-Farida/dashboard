import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

// code splitting | lazy load | Suspanse
const Layout = lazy(() => import("./layout"));
const Home = lazy(() => import("./home"));
const About = lazy(() => import("./about"));

const Login = lazy(() => import("./login"));

const Auth = lazy(() => import("./auth"));

const Dashboard = lazy(() => import("./dashboard"));
const Statistics = lazy(() => import("./dashboard/statistics"));
const Teacher = lazy(() => import("./dashboard/teacher"));

const Student = lazy(() => import("./dashboard/student"));
const StudentActive = lazy(() => import("./dashboard/student/active"));
const StudentArchive = lazy(() => import("./dashboard/student/archive"));
const StudentDeleted = lazy(() => import("./dashboard/student/deleted"));

const MainRouters = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "*", element: <div>404</div> },
          ],
        },
        { path: "/login", element: <Login /> },
        {
          path: "/",
          element: <Auth />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
              children: [
                { index: true, element: <Statistics /> },
                { path: "teacher", element: <Teacher /> },
                {
                  path: "student",
                  element: <Student />,
                  children: [
                    { index: true, element: <StudentActive /> },
                    {
                      path: "archive",
                      element: <StudentArchive />,
                      children: [
                        { index: true, element: <div>Tashkent</div> },
                        { path: "samarkand", element: <div>Samarqand</div> },
                      ],
                    },
                    { path: "deleted", element: <StudentDeleted /> },
                  ],
                },
              ],
            },
          ],
        },
      ])}
    </Suspense>
  );
};

export default React.memo(MainRouters);
