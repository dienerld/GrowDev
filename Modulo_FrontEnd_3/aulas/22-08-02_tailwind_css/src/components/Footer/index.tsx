import { Card } from '../Card';
import type { TPropsCard } from '../Card';
import delivery from '../../assets/delivery.svg';
import heart from '../../assets/heart.svg';
import money from '../../assets/money.svg';

export default function Footer() {
  const cardsListIcons: TPropsCard[] = [
    { title: 'Delivery', image: delivery },
    { title: 'Heart', image: heart },
    { title: 'Money', image: money },
    { title: 'Money', image: money },

  ];

  return (
    <div className="flex flex-col">

      <div className={`
          col-span-5 bg-blue-700/75 text-white
          flex flex-auto
          justify-evenly items-center
        `}
      >
        { cardsListIcons.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>

      <div className={`
          col-span-5 bg-white text-black
          flex flex-auto
          justify-evenly items-center
        `}
      >
        { cardsListIcons.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>

    </div>
  );
}
