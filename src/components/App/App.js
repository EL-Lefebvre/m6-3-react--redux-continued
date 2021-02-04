import React, { useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import ArtistRoute from "./ArtistRoute";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import {
  receiveAccessToken,
  requestAccessToken,
  receiveAccessTokenError,
} from "../../actions";

const DEFAULT_ARTIST_ID = "1YZEoYFXx4AxVv13OiOPvZ";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestAccessToken());
    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveAccessToken(`${json.access_token}`));
      })
      .catch((err) => {
        console.error(err);
        dispatch(receiveAccessTokenError());
      });
  }, []);
  return (
    <Wrapper>
      <Router>
        <Switch>
          {/* <Route path="artist:id">
            <ArtistRoute />
          </Route> */}
          {/* <Route exact path="/">
            <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
          </Route> */}
               <Route path={`/artist/${DEFAULT_ARTIST_ID}`} >
            <ArtistRoute />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default App;
