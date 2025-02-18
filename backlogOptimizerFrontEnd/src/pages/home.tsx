import { HeroParallax } from "@/components/ui/hero-parallax";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
    const products = [
        {
          title: "Ocarina of Time",
          thumbnail:
            "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
        },
        {
          title: "Super Mario Galaxy",
          thumbnail:
            "https://i0.wp.com/the-avocado.org/wp-content/uploads/2022/09/super-mario-galaxy-1-button-1599258841533.jpg?resize=1000%2C768&quality=80&ssl=1",
        },
        {
          title: "Red Dead Redemption 2",
          thumbnail:
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
        },
       
        {
          title: "Bioshock",
          thumbnail:
            "https://upload.wikimedia.org/wikipedia/en/e/e7/BioShock-_The_Collection.jpg",
        },
        {
          title: "Breath of the Wild",
          thumbnail:
            "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
        },
        {
            title: "Metroid Prime",
            thumbnail:
                "https://sm.ign.com/ign_ap/cover/m/metroid-pr/metroid-prime-remastered_hnvr.jpg",
        },
        {
          title: "Halo",
          thumbnail:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/10/master-chief-from-halo-combat-evolved-in-front-of-a-backdrop-from-infinite.jpg"
        },
       
        {
          title: "Baldur's Gate 3",
          thumbnail:
            "https://d2naapwr4zpnvs.cloudfront.net/influencerAvatar/132043-1691792679976-small-164632811.jpg",
        },
      ];
    return (
      <>
        <HeroParallax products={products} />
        
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 pb-24 space-y-8">
          <h1 className="text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight md:leading-normal">
            How Does It Work?
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-neutral-300 max-w-2xl">
            Input your available gaming hours, budget, and consoles. Then, enter details about your games—ratings, 
            cost, average completion time, platforms, and genres. With a single click, our system analyzes your data 
            and prioritizes the best games for you to play next.
          </p>
      
          <Button className="px-6 py-3 text-lg font-semibold hover:bg-primary/80 transition-all duration-300 rounded-lg">
            <Link to={"/optimizer"} className="text-black">Try It Out</Link>
          </Button>
        </div>
      </>
    
    );
}

export default Home;
