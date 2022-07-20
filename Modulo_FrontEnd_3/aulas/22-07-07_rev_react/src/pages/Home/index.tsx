import Cinema from '../../components/Cinema';

export default function Home() {
    const movies = [
        {
            title: 'Thor',
            year: 2022
        },
        {
            title: 'Top Gun',
            year: 2022
        }
    ];
    return (
        <>
            <h1>Home</h1>
            <Cinema movies={movies}/>
        </>
    );
};