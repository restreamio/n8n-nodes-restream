import type { INodeProperties } from 'n8n-workflow';
import { clipDownloadDescription } from './download';

const showOnlyForClips = {
	resource: ['clip'],
};

export const clipDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForClips,
		},
		options: [
			{
				name: 'Get Download URL',
				value: 'download',
				action: 'Get a download URL for a clip',
				description: 'Get a temporary download URL for a specific clip',
				routing: {
					request: {
						method: 'GET',
						url: '=/v2/user/clips/{{$parameter.clipId}}/download',
					},
				},
			},
		],
		default: 'download',
	},
	...clipDownloadDescription,
];
