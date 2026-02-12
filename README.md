# @restream/n8n-nodes-restream

This is an n8n community node. It lets you use Restream in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Resources](#resources)

## Installation

Go to your **n8n** > **Settings** > **Community nodes** and install:

```
@restream/n8n-nodes-restream
```

For more details, see the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- Clip Project
    - Get many clip projects
    - Get a clip project
- Clip
    - Get a download URL for a clip

## Credentials

This node uses OAuth2 authentication.

1. Go to the [Restream Developer Portal](https://developers.restream.io/) and create a new application.
2. Copy the **Client ID** and **Client Secret** into your n8n Restream OAuth2 credential.
3. From n8n, copy the **OAuth Redirect URL** and paste it into your Restream application's redirect URI settings.

## Compatibility

Tested with n8n@2.7.4.

## Resources

* [Restream API documentation](https://developers.restream.io/docs)
