import "./App.css";
import { useState } from "react";
import { UserForm, GithubUser, GithubRepos } from "./components";
import { GithubApi } from "./services";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  function getData(userName) {
    Promise.all([
      GithubApi.fetchUser(userName),
      GithubApi.fetchUserRepos(userName),
    ])
      .then(([user, repos]) => {
        setUser(user);
        setRepos(repos);
      })
      .catch((error) => alert(error));
  }

  function handleResetUser() {
    setUser(null);
  }

  if (!user) {
    return (
      <div className="app">
        <UserForm setUser={getData} />
      </div>
    );
  }

  return (
    <div className="app">
      <GithubUser user={user} />
      <GithubRepos repos={repos} />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleResetUser}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

const styles = {
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
};
