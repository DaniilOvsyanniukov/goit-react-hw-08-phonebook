import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import ContactsView from "./views/ContactsView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import HomeView from "./views/HomeView";
import Container from "./components/Container/Container";
import authOperations from "./redux/authorization/authorization-operations";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  );
}
