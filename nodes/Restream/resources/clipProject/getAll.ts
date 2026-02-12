import type { INodeProperties } from 'n8n-workflow';

const showOnlyForClipProjectGetMany = {
	operation: ['getAll'],
	resource: ['clipProject'],
};

export const clipProjectGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForClipProjectGetMany,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
				type: 'query',
				property: 'limit',
				value: '100',
			},
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						continue: '={{ $response.body.pagination?.hasMore === true }}',
						request: {
							qs: {
								cursor: '={{ $response.body.pagination?.nextCursor }}',
							},
						},
					},
				},
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForClipProjectGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
		description: 'Max number of results to return',
	},
	{
		displayName: 'Sort By',
		name: 'sortBy',
		type: 'options',
		displayOptions: {
			show: showOnlyForClipProjectGetMany,
		},
		options: [
			{
				name: 'Created At',
				value: 'CreatedAt',
			},
			{
				name: 'Last Activity',
				value: 'LastActivity',
			},
		],
		default: 'CreatedAt',
		description: 'How to sort the returned projects',
		routing: {
			send: {
				type: 'query',
				property: 'sortBy',
			},
		},
	},
];
