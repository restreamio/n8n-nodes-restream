import type { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class RestreamOAuth2Api implements ICredentialType {
	name = 'restreamOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Restream OAuth2 API';

	icon: Icon = { light: 'file:../icons/restream.svg', dark: 'file:../icons/restream.dark.svg' };

	documentationUrl = 'https://developers.restream.io/docs';

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://api.restream.io/login',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://api.restream.io/oauth/token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'profile.default.read clips.default.read',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'header',
		},
	];
}
