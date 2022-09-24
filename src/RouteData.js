import Dashboard from "./pages/Dashboard";
import EnterNumber from "./pages/EnterNumber";
import OtpVerify from "./pages/OtpVerify";
import Registration from "./pages/Registration";
import Splash from "./pages/Splash";
import Buy99 from "./pages/BuyOneTime";
import Buy499 from "./pages/BuyYearly";
import GreenRevolutionGallery from "./pages/GreenRevolutionGallery";
import HealthArticleGallery from "./pages/HealthArticleGallery";
import ChatScreen from "./pages/Chat";
import Article from "./pages/Article";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Tnc";
import Doctors from "./pages/Doctors";
import ReviewOrder from "./pages/ReviewOrder";
import Orders from "./pages/Orders";
import Consultations from "./pages/Consultations";
import Prescriptions from "./pages/Prescriptions";
import Call from "./pages/Call";
import Refer from "./pages/ReferEarn";
import UpdateRegistration from "./pages/UpdateRegistration";
import Help from "./pages/Help";

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
        path: "/buyonetime",
        component: Buy99,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/buyyearly",
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
    {
        path: "/revieworder",
        component: ReviewOrder,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/orders",
        component: Orders,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/consultations",
        component: Consultations,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/prescriptions",
        component: Prescriptions,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/call",
        component: Call,
        exact: true,
        needsAuth: true,
    },
    {
        path: "/refer",
        component: Refer,
        exact: true,
        needsAuth: true,
    },
    //updateregistration
    {
        path: "/updateregistration",
        component: UpdateRegistration,
        exact: true,
        needsAuth: true,
    },
    //help
     {
        path: "/help",
        component: Help,
        exact: true,
        needsAuth: true,
    },
];

export default RouteData;
