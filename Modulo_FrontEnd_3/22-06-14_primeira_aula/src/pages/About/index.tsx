import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import style from './about.module.css';

export function About() {
  return (
    <div className="About">
      <h1 className={style.h1}>About</h1>
      <Link to="/">Home</Link>

      <Card title="About">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisl eu consectetur consectetur, nisi nisl aliquet nisi,
          euismod consectetur nisi nisi euismod.
        </p>
      </Card>
    </div>
  );
}
