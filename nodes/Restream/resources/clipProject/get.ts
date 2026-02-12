import type { INodeProperties } from 'n8n-workflow';

const showOnlyForClipProjectGet = {
	operation: ['get'],
	resource: ['clipProject'],
};

export const clipProjectGetDescription: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForClipProjectGet,
		},
		description: 'The ID of the clip project to retrieve',
	},
];
