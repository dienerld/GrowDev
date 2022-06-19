import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ContainerFooter, Li, Ul, WrapperLinks, WrapperMediaSocial } from './styles';

export function Footer() {
  return (
    <ContainerFooter>
      <WrapperLinks>
        <Ul>
          <Li>
            <Link to="/about">About</Link>
          </Li>
          <Li isDot>.</Li>

          <Li>
            <Link to="/contact">Contact</Link>
          </Li>
          <Li isDot>.</Li>

          <Li>
            <Link to="/terms">Terms of Use</Link>
          </Li>
          <Li isDot>.</Li>

          <Li>
            <Link to="/privacy">Privacy Policy</Link>
          </Li>
        </Ul>
        <p>
        Desenvolvido por
          <a
            href="https://github.com/dienerld" target="_blank" rel="noreferrer"
          > Diener</a>
        </p>
      </WrapperLinks>

      <WrapperMediaSocial>
        <FaFacebook size={24}/>
        <FaTwitterSquare size={24}/>
        <FaInstagram size={24}/>
      </WrapperMediaSocial>
    </ContainerFooter>
  );
}
