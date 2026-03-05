import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEventGetUpcoming = {
	operation: ['getUpcoming'],
	resource: ['event'],
};

export const eventGetUpcomingDescription: INodeProperties[] = [
	{
		displayName: 'Source',
		name: 'source',
		type: 'options',
		displayOptions: {
			show: showOnlyForEventGetUpcoming,
		},
		options: [
			{
				name: 'All',
				value: '',
			},
			{
				name: 'Studio',
				value: 1,
			},
			{
				name: 'Encoder',
				value: 2,
			},
			{
				name: 'Video',
				value: 3,
			},
		],
		default: '',
		description: 'Filter events by source type',
		routing: {
			send: {
				type: 'query',
				property: 'source',
				value: '={{ $value || undefined }}',
			},
		},
	},
	{
		displayName: 'Scheduled Only',
		name: 'scheduled',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForEventGetUpcoming,
		},
		default: false,
		description: 'Whether to return only scheduled events',
		routing: {
			send: {
				type: 'query',
				property: 'scheduled',
				value: '={{ $value || undefined }}',
			},
		},
	},
];
