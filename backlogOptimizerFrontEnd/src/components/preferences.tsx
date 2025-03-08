import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MultiSelect } from "@/components/ui/multiSelect"
import { IoAddOutline } from "react-icons/io5";
import { X } from "lucide-react"
import { consoleOptions } from './data/consoleOptions';
import { genreOptions } from './data/genreOptions';

function Preferences({ budget, setBudget, maxTime, setMaxTime, owned_consoles, setOwnedConsoles, favoriteGenres, handleFavoriteGenresChange, genreCapInputs, handleGenreCapChange, removeGenreCapInput, addGenreCapInput }: any) {
    return (
        <>
            {/* Budget & Max Time */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                <Input
                    type="number"
                    placeholder="Enter budget"
                    value={budget ?? ""}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    maxLength={10}
                    min={0}
                    className="w-full sm:w-64 p-2 border border-gray-300 rounded-lg"
                />
                <Input
                    type="number"
                    placeholder="Enter max time"
                    value={maxTime ?? ""}
                    onChange={(e) => setMaxTime(Number(e.target.value))}
                    maxLength={10}
                    min={0}
                    className="w-full sm:w-64 p-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* Console & Favorite Genre Selection */}
            <div className="mt-6 space-y-4">
                <MultiSelect
                    options={consoleOptions}
                    selected={owned_consoles}
                    onChange={(selected) => setOwnedConsoles(selected)}
                    placeholder="Consoles you own"
                />
                <MultiSelect
                    options={genreOptions}
                    selected={favoriteGenres}
                    onChange={handleFavoriteGenresChange}
                    placeholder="Favorite genres (max 5, preference order)"
                />
            </div>

            {/* Genre Cap Section */}
            <div className="mt-6 w-full">
                <h3 className="text-lg font-semibold text-center">Genre Caps</h3>
                <div className="flex flex-col space-y-3 mt-2">
                    {genreCapInputs.map((input: any, index: any) => (
                        <div key={index} className="flex items-center gap-3 border p-3 rounded-lg shadow-sm">
                            <MultiSelect
                                options={genreOptions}
                                selected={input.genre ? [input.genre] : []}
                                onChange={(selected) => handleGenreCapChange(index, 'genre', selected[0] || null)}
                                placeholder="Select genre"
                            />
                            <Input
                                type="number"
                                placeholder="Cap"
                                value={input.cap}
                                onChange={(e) => handleGenreCapChange(index, 'cap', e.target.value)}
                                maxLength={10}
                                min={0}
                                className="w-24 p-2 border border-gray-300 rounded-lg"
                            />
                            <button 
                                className="text-red-500 hover:text-red-700"
                                onClick={() => removeGenreCapInput(index)}
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                </div>
                <Button
                    variant="ghost"
                    className="mt-3 flex items-center justify-center"
                    onClick={addGenreCapInput}
                >
                    <IoAddOutline className="h-5 w-5" />
                    <span className="ml-1">Add Genre Cap</span>
                </Button>
            </div>
        </>
    );
};

export default Preferences;