import type { INodeProperties } from 'n8n-workflow';
import { clipProjectGetManyDescription } from './getAll';
import { clipProjectGetDescription } from './get';

const showOnlyForClipProjects = {
	resource: ['clipProject'],
};

export const clipProjectDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForClipProjects,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many clip projects',
				description: 'Get a list of many clip projects for the authenticated user',
				routing: {
					request: {
						method: 'GET',
						url: '/v2/user/clips/projects',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'projects',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a clip project',
				description: 'Get a single clip project with its clips and posted clips',
				routing: {
					request: {
						method: 'GET',
						url: '=/v2/user/clips/projects/{{$parameter.projectId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...clipProjectGetManyDescription,
	...clipProjectGetDescription,
];
