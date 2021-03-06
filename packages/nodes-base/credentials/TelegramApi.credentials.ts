import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class TelegramApi implements ICredentialType {
	name = 'telegramApi';
	displayName = 'Telegram API';
	properties = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string' as NodePropertyTypes,
			default: '',
			description: 'Chat with the <a href="https://telegram.me/botfather">bot father</a> to obtain the access token.',
		},
	];
}
