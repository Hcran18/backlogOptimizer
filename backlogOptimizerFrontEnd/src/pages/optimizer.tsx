import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MultiSelect, type Option } from "@/components/ui/multiSelect"
import { LuInfo } from "react-icons/lu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"


interface GameData {
    name: string;
    price: number | '';
    average_time: number | '';
    genres: string[];
    score: number | '';
    available_consoles: string[];
}

const Optimizer: React.FC = () => {
    const [games, setGames] = useState<GameData[]>([
        { name: '', price: '', average_time: '', genres: [], score: '', available_consoles: [] }
    ]);
    const [optimizedGames, setOptimizedGames] = useState<GameData[]>([]);
    const [budget, setBudget] = useState<number | null>(null);
    const [maxTime, setMaxTime] = useState<number | null>(null);
    const [owned_consoles, setOwnedConsoles] = useState<Option[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const hasSeenDialog = localStorage.getItem("hasSeenDialog");
        if (!hasSeenDialog) {
            setIsDialogOpen(true);
            localStorage.setItem("hasSeenDialog", "true");
        }
    }, []);

    const consoleOptions: Option[] = [
        { value: "Switch", label: "Nintendo Switch" },
        { value: "PS5", label: "PlayStation 5" },
        { value: "PS4", label: "PlayStation 4" },
        { value: "PS3", label: "PlayStation 3" },
        { value: "PS2", label: "PlayStation 2" },
        { value: "Playstation", label: "PlayStation 1" },
        { value: "XBOX Series X", label: "Xbox Series X" },
        { value: "XBOX Series S", label: "Xbox Series S" },
        { value: "XBOX One", label: "Xbox One" },
        { value: "XBOX 360", label: "Xbox 360" },
        { value: "XBOX", label: "Xbox" },
        { value: "Wii U", label: "Wii U" },
        { value: "Wii", label: "Wii" },
        { value: "GameCube", label: "GameCube" },
        { value: "N64", label: "Nintendo 64" },
        { value: "SNES", label: "SNES" },
        { value: "NES", label: "NES" },
        { value: "Sega Dreamcast", label: "Sega Dreamcast" },
        { value: "Sega Saturn", label: "Sega Saturn" },
        { value: "Sega Genesis", label: "Sega Genesis" },
        { value: "Sega Master System", label: "Sega Master System" },
        { value: "Atari 2600", label: "Atari 2600" },
        { value: "Atari 5200", label: "Atari 5200" },
        { value: "Atari 7800", label: "Atari 7800" },
        { value: "Atari Jaguar", label: "Atari Jaguar" },
        { value: "3DS", label: "3DS" },
        { value: "DSi", label: "DSi" },
        { value: "DS", label: "DS"},
        { value: "GBA", label: "GBA" },
        { value: "Gameboy", label: "Gameboy" },
        { value: "PSP", label: "PSP"},
        { value: "PC", label: "PC" }
    ];

    const genreOptions: Option[] = [
        { value: "Action", label: "Action" },
        { value: "Adventure", label: "Adventure" },
        { value: "Platformer", label: "Platformer" },
        { value: "RPG", label: "RPG" },
        { value: "Puzzle", label: "Puzzle" },
        { value: "Horror", label: "Horror" },
        { value: "Survival", label: "Survival" },
        { value: "Indie", label: "Indie" },
        { value: "Open World", label: "Open World" },
        { value: "Roguelike", label: "Roguelike" },
        { value: "First-Person Shooter", label: "First-Person Shooter" },
        { value: "Third-Person Shooter", label: "Third-Person Shooter" },
        { value: "Metroidvania", label: "Metroidvania" },
        { value: "Hack and Slash", label: "Hack and Slash" },
        { value: "Farming Sim", label: "Farming Sim" },
        { value: "Card Game", label: "Card Game" },
        { value: "Rhythm", label: "Rhythm" }
    ];

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newGames = [...games];
    
        newGames[index] = {
            ...newGames[index],
            [name]: name === 'price' || name === 'average_time' || name === 'score' 
                ? value === '' ? '' : parseFloat(value) 
                : value
        };
    
        setGames(newGames);
    };
    

    const addGameInput = () => {
        setGames([...games, { name: '', price: 0, average_time: 0, genres: [], score: 0, available_consoles: [] }]);
    };

    const fillDummyData = () => {
        const dummyData = [
            {"name": "Legend of Zelda: Ocarina of Time", "score": 99, "price": 50, "time": 30, "genres": ["Action", "Adventure"], "available_consoles": ["Switch", "N64", "3DS"]},
            {"name": "Grand Theft Auto IV", "score": 98, "time": 54, "price": 20, "genres": ["Action", "Adventure", "Third-Person Shooter"], "available_consoles": ["XBOX 360", "PS3", "PC"]},
            {"name": "Super Mario Galaxy", "score": 97, "price": 50, "time": 14, "genres": ["Platformer", "Adventure"], "available_consoles": ["Switch", "Wii"]},
            {"name": "Super Mario Galaxy 2", "score": 97, "price": 60, "time": 21, "genres": ["Platformer", "Adventure"], "available_consoles": ["Wii"]},
            {"name": "Legend of Zelda: Breath of the Wild", "score": 97, "price": 60, "time": 98, "genres": ["Action", "Adventure", "Open World"], "available_consoles": ["Switch"]},
            {"name": "Tony Hawk's Pro Skater 3", "score": 97, "price": 60, "time": 8, "genres": ["Sports"], "available_consoles": ["Playstation", "XBOX", "PC", "Gamecube"]},
            {"name": "Red Dead Redemption 2", "score": 97, "price": 60, "time": 83, "genres": ["Third-Person Shooter", "Adventure", "Action", "Open World"], "available_consoles": ["PC", "XBOX ONE", "PS4"]},
            {"name": "Grand Theft Auto V", "score": 97, "time": 50, "price": 30, "genres": ["Action", "Adventure", "Third-Person Shooter"], "available_consoles": ["XBOX ONE", "XBOX Series", "PS4", "PS5", "PC"]},
            {"name": "Metroid Prime", "score": 97, "time": 16, "price": 40, "genres": ["Action", "Adventure", "First-Person Shooter", "Metroidvania"], "available_consoles": ["Switch", "Gamecube"]},
            {"name": "Super Mario Odyssey", "score": 97, "time": 27, "price": 60, "genres": ["Adventure", "Platformer"], "available_consoles": ["XBOX 360", "PS3", "PC"]},
            {"name": "Halo", "score": 97, "price": 10, "time": 11, "genres": ["First-Person Shooter"], "available_consoles": ["PC", "XBOX"]},
            {"name": "Half-Life 2", "score": 96, "price": 10, "time": 15, "genres": ["First-Person Shooter"], "available_consoles": ["PC"]},
            {"name": "Bioshock", "score": 96, "time": 12, "price": 50, "genres": ["Action", "Adventure", "Third-Person Shooter", "Horror"], "available_consoles": ["XBOX 360", "PS3", "PC", "Switch", "PS4", "XBOX One"]},
            {"name": "GoldenEye 007", "score": 96, "price": 50, "time": 8, "genres": ["First-Person Shooter"], "available_consoles": ["Nintendo 64, Switch, XBOX One, XBOX Series"]},
            {"name": "Uncharted 2", "score": 96, "price": 50, "time": 12, "genres": ["Third-Person Shooter", "Action", "Adventure", "Platformer"], "available_consoles": ["PS3", "PS4"]},
            {"name": "Resident Evil 4", "score": 96, "price": 40, "time": 18, "genres": ["Third-Person Shooter", "Horror", "Survival"], "available_consoles": ["PC", "PS4", "PS5", "XBOX Series"]},
            {"name": "Baldurs Gate 3", "score": 96, "price": 70, "time": 100, "genres": ["RPG"], "available_consoles": ["PC", "PS5", "XBOX Series"]},
            {"name": "Mass Effect 2", "score": 96, "price": 30, "time": 30, "genres": ["Third-Person Shooter", "Action", "RPG"], "available_consoles": ["PC", "PS3", "XBOX 360"]},
            {"name": "Elden Ring", "score": 96, "price": 60, "time": 80, "genres": ["Action", "Open-World", "RPG"], "available_consoles": ["PC", "PS4", "PS5", "XBOX One", "XBOX Series"]},
            {"name": "Skyrim", "score": 96, "price": 20, "time": 90, "genres": ["Action", "Open-World", "RPG"], "available_consoles": ["PC", "PS3", "PS4", "PS5", "XBOX 360", "XBOX One", "XBOX Series", "Switch"]},
            {"name": "Half-Life", "score": 96, "price": 10, "time": 13, "genres": ["First-Person Shooter"], "available_consoles": ["PC"]},
            {"name": "The Legend of Zelda: Tears of the Kingdom", "score": 96, "price": 70, "time": 100, "genres": ["Action", "Adventure", "Open World"], "available_consoles": ["Switch"]},
            {"name": "The Legend of Zelda: Wind Waker", "score": 96, "price": 60, "time": 30, "genres": ["Action", "Adventure"], "available_consoles": ["Wii U", "Gamecube"]},
            {"name": "Metal Gear Solid 2", "score": 96, "price": 20, "time": 14, "genres": ["Action", "Adventure", "Third-Person Shooter"], "available_consoles": ["PC", "PS2", "PS3", "PS4", "PS5", "XBOX", "XBOX 360", "XBOX One", "XBOX Series", "Switch"]},
            {"name": "Baldurs Gate 2", "score": 95, "price": 30, "time": 80, "genres": ["RPG"], "available_consoles": ["PC"]},
            {"name": "Grand Theft Auto: San Andreas", "score": 95, "price": 60, "time": 40, "genres": ["Third-Person Shooter", "Action", "Open World"], "available_consoles": ["PC", "PS2", "PS3", "PS4", "XBOX", "XBOX 360", "Switch"]},
            {"name": "Grand Theft Auto: Vice City", "score": 95, "price": 60, "time": 20, "genres": ["Third-Person Shooter", "Action", "Open World"], "available_consoles": ["PC", "PS2", "PS4", "PS5", "XBOX", "XBOX 360", "XBOX One", "XBOX Series", "Switch"]},
            {"name": "Halo 2", "score": 95, "price": 10, "time": 10, "genres": ["First-Person Shooter"], "available_consoles": ["PC", "XBOX", "XBOX 360", "XBOX 360"]},
            {"name": "The Legend of Zelda: Majora's Mask", "score": 95, "price": 50, "time": 30, "genres": ["Action", "Adventure"], "available_consoles": ["Switch", "3DS", "N64"]},
            {"name": "The Last of Us", "score": 95, "price": 60, "time": 15, "genres": ["Third-Person Shooter", "Action", "Adventure", "Horror", "Survival"], "available_consoles": ["PC", "PS4", "PS5"]},
            {"name": "The Legend of Zelda: Twilight Princess", "score": 95, "price": 60, "time": 29, "genres": ["Action", "Adventure"], "available_consoles": ["Wii", "Gamecube", "Wii U"]},
            {"name": "Persona 5 Royal", "score": 95, "price": 60, "time": 110, "genres": ["RPG"], "available_consoles": ["PC", "PS4", "PS5", "XBOX One", "XBOX Series", "Switch"]},
            {"name": "Red Dead Redemtion", "score": 95, "price": 50, "time": 22, "genres": ["Third-Person Shooter", "Action", "Open World"], "available_consoles": ["PC", "PS3", "PS4", "XBOX 360", "Switch"]},
            {"name": "Portal 2", "score": 95, "price": 10, "time": 10, "genres": ["Puzzle", "Platformer"], "available_consoles": ["PC", "PS3", "XBOX 360", "Switch"]},
            {"name": "Outer Wilds", "score": 85, "price": 60, "time": 25, "genres": ["Action","Adventure", "Open World", "Indie"], "available_consoles": ["PC", "PS4", "PS5", "XBOX One", "XBOX Series", "Switch"]},
            {"name": "Celeste", "score": 92, "price": 20, "time": 12, "genres": ["Platformer", "Indie"], "available_consoles": ["PC", "PS4", "XBOX One", "Switch"]},
            {"name": "Hades", "score": 93, "price": 25, "time": 40, "genres": ["Action", "Roguelike", "Hack and Slash", "Indie"], "available_consoles": ["PC", "PS4", "PS5", "XBOX One", "XBOX Series", "Switch"]},
            {"name": "Hollow Knight", "score": 90, "price": 15, "time": 100, "genres": ["Action", "Adventure", "Metroidvania", "Indie"], "available_consoles": ["PC", "PS4", "PS5", "XBOX One", "Switch"]},
            {"name": "SteamWorld Dig 2", "score": 88, "price": 20, "time": 8, "genres": ["Action", "Adventure", "Rougelike", "Metroidvania", "Platformer", "Indie"], "available_consoles": ["PC", "PS4", "XBOX One", "Switch"]},
            {"name": "Stardew Valley", "score": 89, "price": 15, "time": 80, "genres": ["RPG", "Farming Sim", "Indie"], "available_consoles": ["PC", "PS4", "XBOX One", "Switch"]},
            {"name": "Spiritfarer", "score": 84, "price": 30, "time": 30, "genres": ["Adventure", "Indie"], "available_consoles": ["PC", "PS4","XBOX One", "Switch"]},
            {"name": "Inscryption", "score": 85, "price": 20, "time": 13, "genres": ["Card Game", "Horror", "Roguelike", "Indie"], "available_consoles": ["PC", "PS4", "PS5", "XBOX One", "XBOX Series", "Switch"]},
            {"name": "Subnautica", "score": 87, "price": 30, "time": 35, "genres": ["Open World", "Survival", "Indie"], "available_consoles": ["PC", "PS4", "PS5", "XBOX One", "XBOX Series", "Switch"]},
            {"name": "Tunic", "score": 85, "price": 30, "time": 14, "genres": ["Action", "Adventure", "Indie"], "available_consoles": ["PC", "PS4", "PS5", "XBOX One", "XBOX Series", "Switch"]},
            {"name": "Inside", "score": 93, "price": 20, "time": 4, "genres": ["Puzzle", "Platformer", "Horror", "Indie"], "available_consoles": ["PC", "PS4", "XBOX One", "Switch"]},
            {"name": "Dead Cells", "score": 89, "price": 25, "time": 25, "genres": ["Action", "Platformer", "Roguelike", "Indie"], "available_consoles": ["PC", "PS4", "PS5", "XBOX One", "Switch"]},
            {"name": "Crypt of the NecroDancer", "score": 87, "price": 15, "time": 20, "genres": ["Rythm", "Roguelike", "Indie"], "available_consoles": ["PC", "PS4", "XBOX One", "Switch"]},
            {"name": "Fez", "score": 89, "price": 10, "time": 7, "genres": ["Puzzle", "Platformer", "Indie"], "available_consoles": ["PC", "PS3", "PS4", "XBOX 360", "Switch"]},
            {"name": "Cuphead", "score": 86, "price": 20, "time": 14, "genres": ["Action", "Platformer", "Indie"], "available_consoles": ["PC", "PS4", "XBOX One", "Switch"]},
            {"name": "Shovel Knight", "score": 91, "price": 40, "time": 22, "genres": ["Action", "Platformer", "Indie"], "available_consoles": ["PC", "PS3", "PS4", "XBOX One", "Switch", "Wii U", "3DS"]},
            {"name": "Undertale", "score": 92, "price": 10, "time": 9, "genres": ["RPG", "Indie"], "available_consoles": ["PC", "PS4", "XBOX One", "Switch"]},
        ];
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
        const request = {
            games,
            budget,
            max_time: maxTime,
            owned_consoles: owned_consoles.map(option => option.value)
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( request )
        };
    
        try {
            const response = await fetch('http://localhost:8000/optimize/', requestOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();
            const data = JSON.parse(jsonData).games;
    
            setOptimizedGames(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger className="top-4 right-4 absolute">
                <LuInfo className="h-5 w-5" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md w-[90%] max-h-[90vh] overflow-y-auto rounded-lg p-6 scrollbar-hidden">
                <DialogHeader>
                    <DialogTitle>How to Optimize Your Game Selection</DialogTitle>
                    <DialogDescription>
                        Follow these steps to create the best game lineup based on your budget and available time.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                    <p>
                        <strong>1. Set Your Preferences: </strong>  
                        Start by entering your budget and the amount of free time you typically have for gaming each week. Then, select the consoles you own and rank your top five favorite genres.
                    </p>

                    <p>
                        <strong>2. Add Genre Limits (Optional): </strong>  
                        If you'd like, you can set a cap on how many games can be chosen per genre. This helps ensure variety, so the optimizer doesn't just select the cheapest options.
                    </p>

                    <p>
                        <strong>3. Enter Game Details: </strong>  
                        Add games by providing the following details:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Game name</li>
                        <li>Score (use <strong>Metacritic</strong> for reference)</li>
                        <li>Price</li>
                        <li>Average completion time (check <strong>HowLongToBeat.com</strong>)</li>
                        <li>Genres</li>
                        <li>Available platforms</li>
                    </ul>

                    <p>
                        <strong>4. Optimize Your Selection: </strong>  
                        Add as many games as you like, then click <strong>Optimize</strong>. The system will generate the best selection based on your inputs!
                    </p>
                </div>
            </DialogContent>
        </Dialog>

        <div className="mt-4 mb-20 mx-1 max-w-5xl items-center justify-center content-center ">
            <h1 className="mb-4 text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight md:leading-normal">
                Optimizer
            </h1>
            <div className="mb-6 flex flex-col items-center space-y-4">
                <Input
                type="number"
                placeholder="Enter budget"
                value={budget ?? ""}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-64 p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                />
                <Input
                type="number"
                placeholder="Enter max time"
                value={maxTime ?? ""}
                onChange={(e) => setMaxTime(Number(e.target.value))}
                className="w-64 p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                />
                <MultiSelect
                options={consoleOptions}
                selected={owned_consoles}
                onChange={(selected) => {
                    setOwnedConsoles(selected);
                }}
                placeholder="Select owned consoles"
                />
            </div>

            {games.map((game, index) => (
                <div
                key={index}
                className="p-4 m-4 border border-gray-300 rounded-lg shadow-sm space-y-2"
                >
                <div className="grid grid-cols-2 gap-4 ">
                    <Input
                    type="text"
                    name="name"
                    placeholder="Name of the game"
                    value={game.name}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                    />
                    <Input
                    type="number"
                    name="score"
                    placeholder="Score"
                    value={game.score}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                    />
                    <Input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={game.price}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                    />
                    <Input
                    type="number"
                    name="average_time"
                    placeholder="Time to complete"
                    value={game.average_time}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full p-2 placeholder-gray-500 border border-gray-300 rounded-lg"
                    />
                </div>
                <MultiSelect
                    options={genreOptions}
                    selected={game.genres.map(genre => ({ value: genre, label: genre }))}
                    onChange={(selected) => {
                        const newGames = [...games];
                        newGames[index].genres = selected.map(option => option.value);
                        setGames(newGames);
                    }}
                    placeholder="Select genres"
                />
                </div>
            ))}

            <div className="flex justify-center space-x-4">
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
                <div className="mt-8">
                <h2 className="text-lg font-semibold text-center">Optimized Games</h2>
                <ul className="list-disc list-inside mt-4">
                    {optimizedGames.map((game, index) => (
                    <li key={index} className="text-center">
                        {game.name}
                    </li>
                    ))}
                </ul>
                </div>
            )}
        </div>
        </>
    );
};

export default Optimizer;
