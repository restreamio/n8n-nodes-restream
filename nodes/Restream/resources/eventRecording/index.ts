import type { INodeProperties } from 'n8n-workflow';
import { eventRecordingGetAllDescription } from './getAll';
import { eventRecordingGetDownloadUrlDescription } from './getDownloadUrl';

const showOnlyForEventRecordings = {
	resource: ['eventRecording'],
};

export const eventRecordingDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForEventRecordings,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get recordings for an event',
				description: 'Get many recordings (video and audio) for a specific event',
				routing: {
					request: {
						method: 'GET',
						url: '=/v2/user/events/{{$parameter.eventId}}/recordings',
					},
				},
			},
			{
				name: 'Get Download URL',
				value: 'getDownloadUrl',
				action: 'Get a download URL for a recording',
				description: 'Generate a temporary download URL for a specific recording file',
				routing: {
					request: {
						method: 'POST',
						url: '=/v2/user/events/{{$parameter.eventId}}/recordings/download-url',
					},
				},
			},
		],
		default: 'getAll',
	},
	...eventRecordingGetAllDescription,
	...eventRecordingGetDownloadUrlDescription,
];
