import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEventRecordingGetDownloadUrl = {
	operation: ['getDownloadUrl'],
	resource: ['eventRecording'],
};

export const eventRecordingGetDownloadUrlDescription: INodeProperties[] = [
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEventRecordingGetDownloadUrl,
		},
		description: 'The UUID of the event',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEventRecordingGetDownloadUrl,
		},
		description: 'The file name from the event recordings response (e.g. "video-2026-02-26-22-01-19.mp4")',
		routing: {
			send: {
				type: 'body',
				property: 'fileName',
			},
		},
	},
];
