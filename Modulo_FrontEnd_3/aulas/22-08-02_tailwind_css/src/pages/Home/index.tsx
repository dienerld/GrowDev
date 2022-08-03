import Footer from '../../components/Footer';
import './styles.css';

export function Home() {
  return (
    // <h1 className="font-mono text-2xl text-amber-600">Diener</h1>
    <div
      className={`
        grid grid-cols-5 text-blue-800
        h-screen items-center text-center`}
    >
      <div className="col-start-3 h-64">
        <h1 className="text-6xl">Casper</h1>
      </div>
      <div className="col-start-2 col-end-5 h-16">
        <h2 className="text-4xl">Americas #1 Rated Mattress Brand*</h2>
      </div>
      <div className="col-start-3 col-end-4 h-12">
        <button
          type="button"
          className={
            `bg-blue-500 hover:bg-blue-700
            text-white font-bold py-2 px-4 rounded
            `
          }
        >
          Shop Now
        </button>
      </div>
      <div className="col-span-5">
        <p className="text-end">
          *Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum!
        </p>
      </div>
      <div className="col-span-5 absolute bottom-0 w-screen">
        <Footer />
      </div>

    </div>

  );
}
