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

- Event
    - Get an event by ID
    - Get event history (finished and missed events)
    - Get in-progress events
    - Get upcoming events
- Event Recording
    - Get recordings for an event
    - Get a download URL for a recording
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

## Upgrading

### v0.2.0 — Event and Recording endpoints

This version adds new OAuth2 scopes (`stream.default.read` and `storage.default.read`) required for the new Event and Event Recording operations. **Existing users must reconnect their Restream OAuth2 credentials** to grant these new permissions:

1. Open your n8n credentials page.
2. Find your Restream OAuth2 credential.
3. Click **Reconnect** to re-authorize with the updated scopes.

Existing Clip and Clip Project operations are unaffected and will continue to work without reconnecting.

## Resources

* [Restream API documentation](https://developers.restream.io/docs)
