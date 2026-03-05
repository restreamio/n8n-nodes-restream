import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEventRecordingGetAll = {
	operation: ['getAll'],
	resource: ['eventRecording'],
};

export const eventRecordingGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEventRecordingGetAll,
		},
		description: 'The UUID of the event to get recordings for',
	},
];
