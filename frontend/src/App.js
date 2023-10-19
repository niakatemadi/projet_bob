import react, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    async function getUsers() {
      const response = await fetch ("http://localhost:8080/api/user/getusers");
      response.json().then(data => {
        setUsers(data);
      })
    }
    getUsers();
  }, [])
  
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  
  const handleOnCreate = () => {
  
  }

  return (
    <>
      <nav>Projet Bob</nav>
      <form>
        <label>Prénom</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
        <label>Nom</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)}/>
        <label>Email</label>
        <input type="email"onChange={(e) => setEmail(e.target.value)} />
        <label>Age</label>
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Ajouter un utilisateur</button>
      </form>
      {users.map((user) => {
        return (
          <div >
            <p>{user.prenom}</p>
            <p>{user.nom}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
        )
      })}
    </>
  );
}

export default App;
