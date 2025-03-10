import React, { useEffect, useState } from 'react';
import Preferences from '@/components/preferences';
import GamesForm from '@/components/gamesForm';
import InstructionsDialog from '@/components/instructionsDialog';
import OptimizedDialog from '@/components/optimizedDialog';
import useSeenDialog from '@/components/customHooks/useSeenDialog';
import { dummyData } from '@/components/data/dummyData';
import { LoadingStates } from '@/components/data/loadingStates';
import { MultiStepLoader as Loader } from '@/components/ui/multi-step-loader';
import { Button } from '@/components/ui/button';
import { type Option } from "@/components/ui/multiSelect"
import { sanitizeText, sanitizeNumber } from '@/lib/utils';

export interface GameData {
    name: string;
    price: number | '';
    average_time: number | '';
    genres: string[];
    score: number | '';
    available_consoles: string[];
}

interface RequestData {
    games: GameData[];
    budget: number | null;
    max_time: number | null;
    owned_consoles: string[];
    favorite_genres: string[];
    genre_caps: { [key: string]: number };
}

const Optimizer: React.FC = () => {
    const [games, setGames] = useState<GameData[]>([
        { name: '', price: '', average_time: '', genres: [], score: '', available_consoles: [] }
    ]);
    const [optimizedGames, setOptimizedGames] = useState<GameData[]>([]);
    const [budget, setBudget] = useState<number | null>(null);
    const [maxTime, setMaxTime] = useState<number | null>(null);
    const [owned_consoles, setOwnedConsoles] = useState<Option[]>([]);
    const [favoriteGenres, setFavoriteGenres] = useState<Option[]>([]);
    const [genreCaps, setGenreCaps] = useState<{ [key: string]: number }>({});
    const [genreCapInputs, setGenreCapInputs] = useState<{ genre: Option | null, cap: number | '' }[]>([{ genre: null, cap: '' }]);
    const [isDialogOpen, setIsDialogOpen] = useSeenDialog();
    const [isOptimizedDialogOpen, setIsOptimizedDialogOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFavoriteGenresChange = (selected: Option[]) => {
        if (selected.length <= 5) {
            setFavoriteGenres(selected);
        }
    };

    const handleInputChange = async (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newGames = [...games];
    
        newGames[index] = {
            ...newGames[index],
            [name]: name === 'price' || name === 'average_time' || name === 'score' 
                ? sanitizeNumber(value)
                : sanitizeText(value)
        };
    
        setGames(newGames);
    };

    const handleGenreCapChange = (index: number, field: 'genre' | 'cap', value: any) => {
        setGenreCapInputs((prevInputs) => {
            const newInputs = [...prevInputs];
            const oldGenre = newInputs[index].genre?.value;
            
            if (field === 'genre') {
                newInputs[index].genre = value;
            } else {
                newInputs[index].cap = sanitizeNumber(value);
            }
    
            setGenreCaps((prevGenreCaps) => {
                const updatedGenreCaps = { ...prevGenreCaps };
    
                if (field === 'genre' && oldGenre && oldGenre !== value?.value) {
                    delete updatedGenreCaps[oldGenre];
                }
    
                if (newInputs[index].genre) {
                    updatedGenreCaps[newInputs[index].genre.value] = newInputs[index].cap === '' ? 0 : newInputs[index].cap;
                }
    
                return updatedGenreCaps;
            });
    
            return newInputs;
        });
    };
    

    const addGenreCapInput = () => {
        setGenreCapInputs([...genreCapInputs, { genre: null, cap: '' }]);
    };

    const removeGenreCapInput = (index: number) => {
        const newGenreCapInputs = genreCapInputs.filter((_, i) => i !== index);
        setGenreCapInputs(newGenreCapInputs);

        const newGenreCaps = { ...genreCaps };
        if (genreCapInputs[index].genre) {
            delete newGenreCaps[genreCapInputs[index].genre.value];
        }
        setGenreCaps(newGenreCaps);
    };

    const addGameInput = () => {
        setGames([...games, { name: '', price: '', average_time: '', genres: [], score: '', available_consoles: [] }]);
    };

    const removeGame = (index: number) => {
        setGames(games.filter((_, i) => i !== index));
    };

    const fillDummyData = () => {
        const mappedData = dummyData.map(game => ({
            name: game.name,
            price: game.price,
            average_time: game.time,
            genres: game.genres,
            score: game.score,
            available_consoles: game.available_consoles
        }));
        setGames(mappedData);
    };

    const optimize = async () => {
        // error handling
        if (budget === null || maxTime === null || favoriteGenres.length === 0 || owned_consoles.length === 0) {
            alert('Please fill out all fields.');
            return;
        }

        if (games.some(game => game.name === '' || game.price === '' || game.average_time === '' || game.score === '' || game.genres.length === 0 || game.available_consoles.length === 0)) {
            alert('Please fill out all fields for each game.');
            return;
        }

        const request: RequestData = {
            games,
            budget,
            max_time: maxTime,
            owned_consoles: owned_consoles.map(option => option.value),
            favorite_genres: favoriteGenres.map(option => option.value),
            genre_caps: genreCaps
        };
    
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };
    
        try {
            setLoading(true);
            const response = await fetch('https://backlogoptimizer.onrender.com/optimize/', requestOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const jsonData = await response.json();
            const data = JSON.parse(jsonData).games;

            setTimeout(() => {
                setOptimizedGames(data);
                setLoading(false);
                setIsOptimizedDialogOpen(true);
            }, 14000);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };
    

    return (
        <>
        <Loader loadingStates={LoadingStates} loading={loading} duration={3000} />
        <InstructionsDialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />

        <div className="mt-4 mb-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight md:leading-normal">
                Optimizer
            </h1>
            <div className="mb-6 w-full">
                <h2 className="text-2xl font-bold text-center">Set Your Preferences</h2>
                <Preferences 
                    budget={budget} 
                    setBudget={setBudget}
                    maxTime={maxTime}
                    setMaxTime={setMaxTime}
                    owned_consoles={owned_consoles}
                    setOwnedConsoles={setOwnedConsoles}
                    favoriteGenres={favoriteGenres}
                    handleFavoriteGenresChange={handleFavoriteGenresChange}
                    genreCapInputs={genreCapInputs}
                    handleGenreCapChange={handleGenreCapChange}
                    removeGenreCapInput={removeGenreCapInput}
                    addGenreCapInput={addGenreCapInput} />
            </div>

            <h2 className="text-2xl font-bold">Add Games</h2>
            <GamesForm games={games} setGames={setGames} removeGame={removeGame} handleInputChange={handleInputChange} />

            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <Button variant="outline" className="px-4 py-2" onClick={fillDummyData}>
                    Fill Dummy Data
                </Button>
                <Button variant="outline" className="px-4 py-2" onClick={addGameInput}>
                    Add Another Game
                </Button>
                <Button className="px-4 py-2 text-black" onClick={optimize}>
                    Optimize
                </Button>
            </div>

            {optimizedGames.length > 0 && (
                <OptimizedDialog optimizedGames={optimizedGames} isOptimizedDialogOpen={isOptimizedDialogOpen} setIsOptimizedDialogOpen={setIsOptimizedDialogOpen} />
            )}
        </div>
        </>
    );
};

export default Optimizer;
