import { Link } from 'react-router-dom';
import Button from '../../components/button';

const listCTA = [
  {
    label: 'Order Now!',
    link: '/order',
    variant: 'primary',
  },
  {
    label: 'About Us',
    link: '/about-us',
    variant: 'secondary',
  },
  {
    label: 'Feedback',
    link: '/feedback',
    variant: 'secondary',
  },
];

export default function HomeListCTA() {
  return (
    <section className="h-[calc(100vh-156px)] flex flex-col justify-center">
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-3 justify-center max-w-48 mx-auto">
          {listCTA.map((item, i) => (
            <Link key={`${item?.label}-${i}`} to={item?.link}>
              <Button variant={item?.variant}>{item?.label}</Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
