import { useContext } from 'react';
import Switch from 'react-switch';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { shade } from 'polished';

import { ThemeContext } from 'styled-components';
import { Container, WrapperSwitch } from './styles';

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
        <WrapperSwitch>
          <MdOutlineLightMode/>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            uncheckedIcon={false}
            checkedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={shade(0.2, background.secondary)}
            offColor={shade(0.4, background.primary)}
          />
          <MdOutlineDarkMode/>
        </WrapperSwitch>
      </Container>
    </nav>
  );
}
