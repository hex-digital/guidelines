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

## WordPress

A number of Hex's brochure websites run on WordPress. Usually, the repo
in GitHub will contain setup instructions for these websites, but overall
Hex recommends the following local setup:

### Local WP - https://localwp.com/

This is a self-contained docker environment built for the quick setup
and maintenance of local WordPress environments. We thoroughly recommend it
over entry-level solutions like MAMP, or more time-consuming solutions like
Apache vhosts or maintaining docker instances per projects.

### Migrate DB Pro - https://deliciousbrains.com/wp-migrate-db-pro/

This is a plugin that allows the pushing and pulling of Database, Plugins,
Media and Theme files from one environment to another. This is the recommended
way of downloading a copy of the Production database and Plugins, ready
to get cracking on local development.

Login details for the platform can be found in Hex's Password Manager
application, and from there you can get the license key to enable its use.

You'll need to install 3 plugins to access all database, plugins, media and theme,
and they'll also need to be installed on the server you're downloading from.
Then just follow instructions in the plugin, or ask a team lead or lead engineer
for help.

### BE Media From Production - https://github.com/billerickson/BE-Media-from-Production

You may not want to load multiple GB of images locally for each website
you work on. To bypass this, you can use the BE Media From Production plugin
locally. 

When activated and configured, this will attempt to load images from your local
development environment. If they don't exist, it will then attempt to load
the same images from the Production URL specified. This means you can have
an empty `uploads` directory locally, and still see all images in your
local environment.
