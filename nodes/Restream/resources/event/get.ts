import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEventGet = {
	operation: ['get'],
	resource: ['event'],
};

export const eventGetDescription: INodeProperties[] = [
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEventGet,
		},
		description: 'The UUID of the event to retrieve',
	},
];
