import { Input } from '@/components/ui/input';
import { MultiSelect } from "@/components/ui/multiSelect"
import { genreOptions } from './data/genreOptions';
import { consoleOptions } from './data/consoleOptions';
import { X } from "lucide-react"

function GamesForm({games, setGames, removeGame, handleInputChange} : any) {
    return (
        <>
        {games.map((game: any, index: any) => (
            <div
            key={index}
            className="p-7 m-4 max-w-full border border-gray-300 rounded-lg shadow-sm space-y-2 relative"
            >
                <button
                    onClick={() => removeGame(index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                    <X className="h-6 w-6" />
                </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                type="text"
                name="name"
                placeholder="Name of the game"
                value={game.name}
                onChange={(e) => handleInputChange(index, e)}
                maxLength={100}
                className="w-full p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                />
                <Input
                type="number"
                name="score"
                placeholder="Score"
                value={game.score}
                onChange={(e) => handleInputChange(index, e)}
                maxLength={3}
                min={0}
                className="w-full p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                />
                <Input
                type="number"
                name="price"
                placeholder="Price"
                value={game.price}
                onChange={(e) => handleInputChange(index, e)}
                maxLength={10}
                min={0}
                className="w-full p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                />
                <Input
                type="number"
                name="average_time"
                placeholder="Time to complete"
                value={game.average_time}
                onChange={(e) => handleInputChange(index, e)}
                maxLength={10}
                min={0}
                className="w-full p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                />
            </div>
            <MultiSelect
                options={genreOptions}
                selected={game.genres.map((genre: any) => ({ value: genre, label: genre }))}
                onChange={(selected) => {
                    const newGames = [...games];
                    newGames[index].genres = selected.map(option => option.value);
                    setGames(newGames);
                }}
                placeholder="Select genres"
            />
            <MultiSelect
                options={consoleOptions}
                selected={game.available_consoles.map((console: any) => ({ value: console, label: console }))}
                onChange={(selected) => {
                    const newGames = [...games];
                    newGames[index].available_consoles = selected.map(option => option.value);
                    setGames(newGames);
                }}
                placeholder="Select available consoles"
            />
            </div>
        ))}
        </>
    );
};

export default GamesForm;