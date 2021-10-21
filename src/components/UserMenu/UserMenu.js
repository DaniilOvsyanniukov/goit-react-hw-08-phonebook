import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/authorization/authorization-selectors";
import authOperations from "../../redux/authorization/authorization-operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
