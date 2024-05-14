import { RouterProvider } from "react-router-dom"
import { Suspense } from "react"
import Loader from "./components/Loader"
import { ToastContainer } from "react-toastify"
import { router } from "./route/Route"


function App() {
  return (
    <>
      {/* <Loader /> */}
      <Suspense fallback={
        <Loader />
      }>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  )
}
export default App