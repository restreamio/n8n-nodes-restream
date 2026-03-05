import type { INodeProperties } from 'n8n-workflow';
import { eventGetDescription } from './get';
import { eventGetHistoryDescription } from './getHistory';
import { eventGetInProgressDescription } from './getInProgress';
import { eventGetUpcomingDescription } from './getUpcoming';

const showOnlyForEvents = {
	resource: ['event'],
};

export const eventDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForEvents,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an event',
				description: 'Get a single event by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/v2/user/events/{{$parameter.eventId}}',
					},
				},
			},
			{
				name: 'Get History',
				value: 'getHistory',
				action: 'Get event history',
				description: 'Get a list of finished and missed events',
				routing: {
					request: {
						method: 'GET',
						url: '/v2/user/events/history',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'items',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get In Progress',
				value: 'getInProgress',
				action: 'Get in progress events',
				description: 'Get a list of currently in-progress events',
				routing: {
					request: {
						method: 'GET',
						url: '/v2/user/events/in-progress',
					},
				},
			},
			{
				name: 'Get Upcoming',
				value: 'getUpcoming',
				action: 'Get upcoming events',
				description: 'Get a list of upcoming events',
				routing: {
					request: {
						method: 'GET',
						url: '/v2/user/events/upcoming',
					},
				},
			},
		],
		default: 'getHistory',
	},
	...eventGetDescription,
	...eventGetHistoryDescription,
	...eventGetInProgressDescription,
	...eventGetUpcomingDescription,
];
