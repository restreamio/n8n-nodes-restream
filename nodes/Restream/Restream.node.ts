import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { clipProjectDescription } from './resources/clipProject';
import { clipDescription } from './resources/clip';
import { eventDescription } from './resources/event';
import { eventRecordingDescription } from './resources/eventRecording';

export class Restream implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Restream',
		name: 'restream',
		icon: { light: 'file:../../icons/restream.svg', dark: 'file:../../icons/restream.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Access Restream Events, Recordings, and Clips using the Restream API',
		defaults: {
			name: 'Restream',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'restreamOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.restream.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Event',
						value: 'event',
					},
					{
						name: 'Event Recording',
						value: 'eventRecording',
					},
					{
						name: 'Clip Project',
						value: 'clipProject',
					},
					{
						name: 'Clip',
						value: 'clip',
					},
				],
				default: 'clipProject',
			},
			...eventDescription,
			...eventRecordingDescription,
			...clipProjectDescription,
			...clipDescription,
		],
	};
}
