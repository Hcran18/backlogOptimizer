import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { LuInfo } from "react-icons/lu";

interface InstructionsDialogProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (isOpen: boolean) => void;
}

function InstructionsDialog({ isDialogOpen, setIsDialogOpen }: InstructionsDialogProps) {
    return (
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
    )
}

export default InstructionsDialog;