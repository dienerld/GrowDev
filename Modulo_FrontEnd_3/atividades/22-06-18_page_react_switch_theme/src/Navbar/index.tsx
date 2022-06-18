import { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';

import { ThemeContext } from 'styled-components';
import { Container } from './styles';

type NavbarProps = {
  toggleTheme(): void;
}

export function Navbar({ toggleTheme }: NavbarProps) {
  const { colors: { background }, title } = useContext(ThemeContext);

  return (
    <nav>
      <Container>
        <span>
          navbar
        </span>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        uncheckedIcon={false}
        checkedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={shade(0.15, background.secondary)}
        offColor={shade(0.2, background.primary)}
      />
      </Container>
    </nav>
  );
}
