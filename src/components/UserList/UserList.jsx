import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../redux/user/operations"
import { selectUserList } from "../../redux/user/selectors";
import css from "./UserList.module.css"
import { NavLink } from "react-router";


export default function UserList(){
const dispatch = useDispatch();

const userList = useSelector(selectUserList);

useEffect(()=>{
    dispatch(fetchUsers())
}, [dispatch])


    return <div className={css.container}>
    <ul className={css.list}>
        {userList.map((item)=> <li key={item.id} className={css.item}>
            <p >Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>City:{item.address.city}</p>
            <div> <NavLink to={`/list/${item.id}`}>Details info:</NavLink></div>
        </li>)}
    </ul>
    </div>
}