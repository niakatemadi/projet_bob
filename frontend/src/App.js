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
  
  const handleOnCreate = async (e) => {
    e.preventDefault();
    const formData = {
      prenom: firstName,
      nom: lastName,
      email: email,
      age: age
    };
    try {
      const response = await fetch(`http://localhost:8080/api/user/createUsername`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
      });
    } catch (error) {
        console.error('Error during updated:', error);
    }
  }

  return (
    <>
      <nav>Projet Bob</nav>
      <form onSubmit={handleOnCreate}>
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
