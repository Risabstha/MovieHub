import React, { lazy, Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "../layout/NavBar/NavBar";

const MainHome = lazy(() => import("../pages/Home/MainHome"));
const MainFavorite = lazy(() => import("../pages/Faviourite/MainFavorite"));
import Error from "../pages/Error/Error";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "../components/Loader";


// resetErrorBoundry 
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="pt-16">
      <div className="max-w-md mx-auto  p-6 border-2 border-red-500 rounded-lg bg-red-100 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-xl font-bold text-red-700 mb-4">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

// // Simulate an error during render
//  function BrokenComponent() {

//   if( Math.random() > 0.5 )
//    throw new Error("I am a fake error!");
//   else {return <MainFavorite />}

// }

const BrowserRouter = () => {
  // We'll use a state to force remount of lazy component
  const [retryKey, setRetryKey] = useState(0);

  // creating browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setRetryKey((prev) => prev + 1)}
        >
          <Suspense fallback={<Loader />}>
            <MainHome />
          </Suspense>
        </ErrorBoundary>
      ),
      errorElement: <Error />,
    },
    {
      path: "/favorite",
      element: (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // Incrementing key forces <About> to remount and retry loading
            setRetryKey((prev) => prev + 1);
          }}
        >
          <Suspense fallback={<Loader />}>
            <MainFavorite />
            {/* <BrokenComponent />  */}
          </Suspense>
        </ErrorBoundary>
      ),
      errorElement: <Error />,
    },
    {
      path: "/nav",
      element: <NavBar />,
      errorElement: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default BrowserRouter;
