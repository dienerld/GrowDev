import { SiDatabricks } from 'react-icons/si';
import { AiOutlineCheckCircle, AiOutlineDesktop } from 'react-icons/ai';

import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { Thumb } from '../../components/Thumb';
import { ContainerHome, WrapperCard, WrapperThumb } from './styles';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

export function Home() {
  const { colors } = useContext(ThemeContext);

  return (
    <ContainerHome>
      <Section title="Minha primeira página com React" height='300px'/>

      <WrapperThumb>
        <Thumb>
          <AiOutlineDesktop size={40} color={colors.icons.primary}/>
          <h3>Somente para desktop</h3>
          <p>Vamos aprender como utilizar um framework</p>
        </Thumb>

        <Thumb>
          <SiDatabricks size={40} color={colors.icons.primary}/>
          <h3>Criado com componentes</h3>
          <p>Utilizamos o Styled Components</p>
        </Thumb>

        <Thumb>
          <AiOutlineCheckCircle size={40} color={colors.icons.primary}/>
          <h3>Fácil aproveitamento</h3>
          <p>Estamos no caminho</p>
        </Thumb>
      </WrapperThumb>

      <WrapperCard>
        <Card >
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fuga totam maiores nulla nisi obcaecati eumaccusamus ad corrupti velit architecto
            tempore, enim temporibus nemo molestiae ex atque, natus
            excepturiadipisci culpa nesciunt praesentium iste aperiam, tenetur nam!
            Porro nesciunt asperiores earum veniam!
            Reiciendis doloremque incidunt dolorum expedita qui explicabo libero?
          </p>
        </Card>

        <Card img={'/assets/iphone-unsplash.jpg'}/>

        <Card img="/assets/code-unsplash.jpg"/>
        <Card >
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fuga totam maiores nulla nisi obcaecati eumaccusamus ad corrupti velit architecto
            tempore, enim temporibus nemo molestiae ex atque, natus
            excepturiadipisci culpa nesciunt praesentium iste aperiam, tenetur nam!
            Porro nesciunt asperiores earum veniam!
            Reiciendis doloremque incidunt dolorum expedita qui explicabo libero?
          </p>
        </Card>

        <Card >
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fuga totam maiores nulla nisi obcaecati eumaccusamus ad corrupti velit architecto
            tempore, enim temporibus nemo molestiae ex atque, natus
            excepturiadipisci culpa nesciunt praesentium iste aperiam, tenetur nam!
            Porro nesciunt asperiores earum veniam!
            Reiciendis doloremque incidunt dolorum expedita qui explicabo libero?
          </p>
        </Card>

        <Card img="/assets/jenga-unsplash.jpg"/>
      </WrapperCard>

      <Section title="Contato" height='200px'/>

      <Footer/>

    </ContainerHome>
  );
}
