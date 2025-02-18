import { HeroParallax } from "@/components/ui/hero-parallax";

function Home() {
    const products = [
        {
          title: "Ocarina of Time",
          link: "",
          thumbnail:
            "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
        },
        {
          title: "Super Mario Galaxy",
          link: "",
          thumbnail:
            "https://i0.wp.com/the-avocado.org/wp-content/uploads/2022/09/super-mario-galaxy-1-button-1599258841533.jpg?resize=1000%2C768&quality=80&ssl=1",
        },
        {
          title: "Red Dead Redemption 2",
          link: "",
          thumbnail:
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
        },
       
        {
          title: "Bioshock",
          link: "",
          thumbnail:
            "https://upload.wikimedia.org/wikipedia/en/e/e7/BioShock-_The_Collection.jpg",
        },
        {
          title: "Breath of the Wild",
          link: "https://editrix.ai",
          thumbnail:
            "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
        },
        {
            title: "Metroid Prime",
            link: "",
            thumbnail:
                "https://sm.ign.com/ign_ap/cover/m/metroid-pr/metroid-prime-remastered_hnvr.jpg",
        },
        {
          title: "Halo",
          link: "",
          thumbnail:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/10/master-chief-from-halo-combat-evolved-in-front-of-a-backdrop-from-infinite.jpg"
        },
       
        {
          title: "Baldur's Gate 3",
          link: "",
          thumbnail:
            "https://d2naapwr4zpnvs.cloudfront.net/influencerAvatar/132043-1691792679976-small-164632811.jpg",
        },
      ];
    return (
        <>
            <HeroParallax products={products} />
        </>
    );
}

export default Home;
