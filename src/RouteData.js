import Dashboard from "./pages/Dashboard";
import EnterNumber from "./pages/EnterNumber";
import OtpVerify from "./pages/OtpVerify";
import Registration from "./pages/Registration";
import Splash from "./pages/Splash";
import Buy99 from "./pages/Buy99";
import Buy499 from "./pages/Buy499";
import GreenRevolutionGallery from "./pages/GreenRevolutionGallery";
import HealthArticleGallery from "./pages/HealthArticleGallery";
import ChatScreen from "./pages/Chat";
import Article from "./pages/Article";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Tnc";
import Doctors from "./pages/Doctors";

const RouteData = [
    {
        path: "/",
        component: Splash,
        exact: true,
        needsAuth: false,
    },
    {
        path: "/number",
        component: EnterNumber,
        exact: true,
        needsAuth: false,
    },
    {
        path: "/otp",
        component: OtpVerify,
        exact: true,
        needsAuth: false,
    },
    {
        path: "/register",
        component: Registration,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/dashboard",
        component: Dashboard,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/buy99",
        component: Buy99,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/buy499",
        component: Buy499,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/gallerygr",
        component: GreenRevolutionGallery,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/galleryha",
        component: HealthArticleGallery,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/chatscreen",
        component: ChatScreen,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/article",
        component: Article,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/privacypolicy",
        component: PrivacyPolicy,
        exact: true,
        needsAuth: false,
    },
    {
        path: "/tnc",
        component: TermsAndConditions,
        exact: true,
        needsAuth: false,
    },
    {
        path: "/doctors",
        component: Doctors,
        exact: true,
        needsAuth: true,
    },


];

export default RouteData;
