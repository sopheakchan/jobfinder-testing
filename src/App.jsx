import "./App.css";
import { useDispatch, useSelector} from "react-redux";
import { fetchJobCategories, getJobCategoriesError, getJobCategoriesStatus, selectAllJobCategories } from "./redux/feature/category-job/categorySlice";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllJobCategories);
  const error = useSelector(getJobCategoriesError);
  const status = useSelector(getJobCategoriesStatus)
  
  useEffect(()=>{
    if (status === 'idle'){
      dispatch(fetchJobCategories());
    }
  }, [status, dispatch]);
  return (
    <>
    <h1 className="mt-20 text-3xl text-blue-800 font-bold text-center">
    Environment : {import.meta.env.VITE_APP_MODE}
    </h1>
    <p className="mt-20 text-3xl text-blue-800 font-bold text-center">
    API URL : {import.meta.env.VITE_API_URL}
    </p>
    </>
  );
}

export default App;
