import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchById } from "../../redux/details/operations";
import { useParams } from "react-router";
import { selectDetails } from "../../redux/details/selectors";
import css from "./Details.module.css";

export default function Details() {
  const dispatch = useDispatch();

  const detailsInfo = useSelector(selectDetails);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  if (!detailsInfo || !detailsInfo.company || !detailsInfo.address) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Name: {detailsInfo.name}</p>
        </li>
        <li className={css.item}>
          <p>Email: {detailsInfo.email}</p>
        </li>
        <li className={css.item}>
          <p>Phone number: {detailsInfo.phone}</p>
        </li>
        <li className={css.item}>
          <p>website: {detailsInfo.website}</p>
        </li>
        <li className={css.item}>
          <p>Company name: {detailsInfo.company.name}</p>
        </li>
        <li className={css.item}>
          <p>City: {detailsInfo.address.city}</p>
          <p>Street: {detailsInfo.address.street}</p>
          <p>Adress: {detailsInfo.address.suite}</p>
          <p>Zip code: {detailsInfo.address.zipcode}</p>
        </li>
      </ul>
    </div>
  );
}
