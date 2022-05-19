import { assets } from "../constants";
import { Home, Explore, Profile, Saved, Trending } from "../screens";
const tabNavigationData = [
    {
        name: "Home",
        component: Home,
        icon: assets.home,
    },
    {
        name: "Explore",
        component: Explore,
        icon: assets.search,
    },
    {
        name: "Trending",
        component: Trending,
        icon: assets.fire,
    },
    {
        name: "Saved",
        component: Saved,
        icon: assets.save,
    },
    {
        name: "Profile",
        component: Profile,
        icon: assets.circle,
    },
];

export default tabNavigationData;
