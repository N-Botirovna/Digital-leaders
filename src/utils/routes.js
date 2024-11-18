import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Grands = lazy(() => import('../pages/Grands'));
const LeaderBoard = lazy(() => import('../pages/LeaderBoard'));
const Partners = lazy(() => import('../pages/Partners'));
const PartnersDetails = lazy(() => import('../pages/Partners/PartnersDetails'));
const Events = lazy(() => import('../pages/Events'));
const LeaderDetail = lazy(() => import('../component/LeaderDetail'));
const EventDetailPage = lazy(() => import('../pages/Events/EventsDetail'));

export const Data = [
	{
		id: 1,
		path: '/',
		component: Home,
	},
];
export const ROUTES = [
	{
		id: 1,
		path: '/',
		component: Home,
	},
    {
		id: 2,
		path: '/grands',
		component: Grands,
	},
    {
		id: 3,
		path: '/leaders',
		component: LeaderBoard,
	},
	{
		id: 4,
		path: '/partners',
		component: Partners,
	},
	{
		id:5,
		path:'/partners/:partnerId',
		component:PartnersDetails,
	},
    {
		id: 6,
		path: '/events',
		component: Events,
	},
	{
		id:7,
		path:'/leader/:leadersId',
		component: LeaderDetail,
	},
	{
		id:8,
		path:'/event/:eventId',
		component: EventDetailPage,
	}
	
];