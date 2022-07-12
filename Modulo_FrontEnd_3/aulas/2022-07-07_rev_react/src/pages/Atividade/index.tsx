import { ChangeEvent, useState } from 'react';

type typeUser = {
  name: string;
  email: string;
  tel: string;
};

export default function Atividade() {
  const [users, setUsers] = useState<typeUser[]>([]);
  const [user, setUser] = useState<typeUser>({} as typeUser);

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const clearForm = () => {
    setUser({
      name: '',
      email: '',
      tel: '',
    });
  };

  const handleSaveUser = () => {
    setUsers([...users, user]);
    clearForm();
  };

  return (
    <>
      <h1>Atividade</h1>
      <form>
        <div>
          <label htmlFor="name">
            <span>Nome:</span>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChangeForm}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            <span>Email:</span>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChangeForm}
            />
          </label>
        </div>

        <div>
          <label htmlFor="tel">
            <span>Tel:</span>
            <input
              type="text"
              name="tel"
              value={user.tel}
              onChange={handleChangeForm}
            />
          </label>
        </div>
        <button type="button" onClick={handleSaveUser}>
          Enviar
        </button>
      </form>

      <h2>Lista</h2>

      {users.map((user, index) => {
        return (
          <div key={`${user.name}-${index}`}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Tel: {user.tel}</p>
          </div>
        );
      })}
    </>
  );
}
