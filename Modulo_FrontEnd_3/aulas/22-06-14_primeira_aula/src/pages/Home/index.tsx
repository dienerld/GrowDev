import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import style from './home.module.css';

export function Home() {
  const list = ['asdas', 'sadas'];

  return (
    <div className="Home">
      <h1 className={style.h1}>Home</h1>

      <Link to="/about">About</Link>

      <Card title="Diener" list={list} />
      <Card title="Dornelas" text="Lorem ipsum" />
    </div>
  );
}
