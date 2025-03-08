import { useEffect, useState } from "react";

function useSeenDialog() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const hasSeenDialog = localStorage.getItem("hasSeenDialog");
        if (!hasSeenDialog) {
            setIsDialogOpen(true);
            localStorage.setItem("hasSeenDialog", "true");
        }
    }, []);

    return [isDialogOpen, setIsDialogOpen] as const;
}

export default useSeenDialog;