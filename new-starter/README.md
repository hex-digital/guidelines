# Hex New Starter Guide

Welcome to Hex! This is a quick new starter guide to get you on your feet.

## JIRA

Hex uses [JIRA](https://hexdigital.atlassian.net/) for ticket management.
It can be accessed using your @hexdigital.com email account.

## GitHub

We use [GitHub](https://github.com) for all code version control. You'll be added to GitHub with access
to all of our repositories. For this, we'll need your GitHub username, so
please ping that over to your engineering lead or team lead.

Please read the [Hex GitHub Contributing Guidelines](https://github.com/hex-digital/guidelines/tree/master/github-contributing)
to learn about Hex's GitHub workflow. 

> Please note that some projects will have a slightly different workflow,
> so always ask for an intro when joining a new project, and read the 
> README.md in the root of the project.

## DeployBot

We use [DeployBot](https://hex-digital.deploybot.com) for managing deployments.
This connects to both GitHub and to our servers, and uploads code.

It deploys code atomically, meaning once a deployment is made, the code for
that deployment will never change. We usually keep up to 5 deployments
on a server at any time, and DeployBot will remove the oldest deployment once
the sixth is deployed successfully.

## Slack

Hex uses Slack for asynchronous communication. It is useful for quick chats,
and is highly visible to the agency. 

We try to keep information in the public channels, so that everyone can see
it that might need to. We try to only use DMs and private channels for
sensitive or personal information, and so try to keep private messages to a minimum.

For any decisions or outcomes, please try to record them in JIRA, with reference
to Slack messages if need be. Information can be easily lost in Slack, so JIRA
is the place to keep it sacred.
