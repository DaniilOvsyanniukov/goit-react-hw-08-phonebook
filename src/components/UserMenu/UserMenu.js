import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/authorization/authorization-selectors";
import authOperations from "../../redux/authorization/authorization-operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const mail = useSelector(authSelectors.getUsermail);

  return (
    <div>
      <span>Добро пожаловать, {mail}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
