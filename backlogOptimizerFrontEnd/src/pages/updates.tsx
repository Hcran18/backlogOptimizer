import { Timeline } from "@/components/ui/timeline";

function Updates() {
const data = [
    {
        title: "Backlogger v1.0",
        content: (
            <div className="text-left">
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
                    Successfully built and launched the first version of <strong>Backlogger</strong>.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
                    Developed and integrated the first iteration of the optimization algorithm, streamlining game prioritization based on various factors such as score, price, and completion time.
                </p>
            </div>
        ),
    },
    {
        title: "Mid 2025",
        content: (
            <div className="text-left">
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
                    Introducing the first wave of <strong>Premium Features</strong>, enhancing user experience with <strong>Account Creation</strong>, <strong>Wishlisting</strong>, and <strong>Saved Unused Games</strong>.  
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
                    Users will be able to create accounts, curate a personalized wishlist, and seamlessly integrate wishlist games into the optimization process. Additionally, any games that don't make the cut will be saved for future planning, ensuring no title is forgotten.
                </p>
            </div>
        ),
    },
    {
        title: "Late 2025",
        content: (
            <div className="text-left">
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
                    The next wave of <strong>Premium Features</strong> arrives, introducing <strong>Minimal Data Entry</strong> and <strong>Calendar Scheduling Integration</strong> for a smarter, more seamless experience.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
                    Simply enter a game's name and purchase price—the system will automatically fetch its average completion time, review score, supported consoles, and genres. Additionally, users will be able to sync their calendar with the app, enabling automatic scheduling of playtime and game selection based on their availability.
                </p>
            </div>
        ),
    },
    {
        title: "2026 and Beyond",
        content: (
            <div className="text-left">
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
                    As I continue to evolve <strong>Backlogger</strong>, I am planning features that will make game tracking more social, personalized, and intelligent.
                </p>

                <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal space-y-2">
                    <li><strong>AI-Powered Game Recommendations</strong> – Receive personalized game suggestions based on your completed games, playstyle, and preferences.</li>
                    <li><strong>Social & Friend Integrations</strong> – Follow friends, share your backlog, compare progress, and get recommendations based on what others are playing.</li>
                </ul>

                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mt-4">
                    My goal is to turn <strong>Backlogger</strong> into the ultimate social, and interactive game management tool. Stay tuned for updates!
                </p>
            </div>
        ),
    },
];
  return (
    <>
    <div className="mt-4 mb-80">
    <div className="items-center justify-center content-center ">
        <h1 className="mb-4 text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight md:leading-normal">
            Future Updates
        </h1>
    </div>
    <div className="w-full">
      <Timeline data={data} />
    </div>
    </div>
    </>
  );
}

export default Updates;
