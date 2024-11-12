import { lazy } from 'react';
const Home = lazy(() => import('/src/pages/Home'));
const Grands = lazy(() => import('/src/pages/Grands'));
const LeaderBoard = lazy(() => import('/src/pages/LeaderBoard'));
const Partners = lazy(() => import('/src/pages/Partners'));
const Events=lazy(()=>import('/src/pages/Events'))
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
		id: 5,
		path: '/events',
		component: Events,
	},
	
];