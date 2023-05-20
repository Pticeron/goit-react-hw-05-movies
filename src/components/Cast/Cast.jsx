import { useParams } from "react-router-dom";

export const Cast = () => {
    const { movieId } = useParams();

    //     useEffect(() => {
  // // http запит
  //     }, [])

  
    return <div>Cast Gallery: {movieId}</div>;
};