import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { GameData } from "@/pages/optimizer"; // Interface for game data

interface OptimizedDialogProps {
    optimizedGames: Array<GameData>;
    isOptimizedDialogOpen: boolean;
    setIsOptimizedDialogOpen: (isOpen: boolean) => void;
}

function OptimizedDialog({optimizedGames, isOptimizedDialogOpen, setIsOptimizedDialogOpen}: OptimizedDialogProps) {
    return (
        <Dialog open={isOptimizedDialogOpen} onOpenChange={setIsOptimizedDialogOpen}>
            <DialogContent className="sm:max-w-md w-[90%] max-h-[90vh] overflow-y-auto rounded-lg p-6 scrollbar-hidden">
                <DialogHeader>
                    <DialogTitle>Optimized Games</DialogTitle>
                    <DialogDescription>
                        Total Price: <strong>${optimizedGames.reduce((total, game) => total + (game.price || 0), 0)}</strong>
                        <br />
                        Total Time: <strong>{optimizedGames.reduce((total, game) => total + (game.average_time || 0), 0)} Hours</strong>
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-2">
                    {optimizedGames.map((game, index) => (
                        <div key={index} className="text-left text-lg font-medium border-b border-gray-300 pb-2">
                            {game.name}
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default OptimizedDialog;