import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchById } from "../../redux/details/operations";
import { useParams } from "react-router";
import { selectDetails } from "../../redux/details/selectors";

export default function Details(){
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch(fetchById(id))
    },[dispatch, id])

    const detailsInfo = useSelector(selectDetails);
    console.log(detailsInfo);

    return <>
    <h3>Hello</h3>
    </>
}