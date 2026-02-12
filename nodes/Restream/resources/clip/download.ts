import type { INodeProperties } from 'n8n-workflow';

const showOnlyForClipDownload = {
	operation: ['download'],
	resource: ['clip'],
};

export const clipDownloadDescription: INodeProperties[] = [
	{
		displayName: 'Clip ID',
		name: 'clipId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForClipDownload,
		},
		description: 'The ID of the clip to get a download URL for',
	},
];
