import { useParams } from "react-router-dom";

export const Reviews = () => {
    const { movieId } = useParams();

 //     useEffect(() => {
  // // http запит
  //     }, [])


    return <div>Reviews: {movieId}</div>;
};