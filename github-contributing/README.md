# GitHub Contribution Guidelines

If you've read these guidelines and just need a quick overview to follow, please
scroll to the end, to the [Git(Hub) Workflow Overview](#github-workflow-overview).

#### Navigate this page
- [Branch naming convention](#branch-naming-convention)
  - [Type](#type)
  - [Code](#code)
  - [Reference Number](#reference-number)
- [Committing your work](#committing-your-work)
- [Submitting work for review](#submitting-work-for-review)
  - [The release branch](#the-release-branch)
  - [Creating a release branch](#creating-a-release-branch)
  - [Pull Requesting to the release branch](#pull-requesting-to-the-release-branch)
- [Deploying work to live environments](#deploying-work-to-live-environments)
  - [Staging](#staging)
  - [Production](#production)
  - [Main](#main)
- [Git(Hub) Workflow Overview](#github-workflow-overview)
  - [Submitting to a release branch](#submitting-to-a-release-branch)
  - [Deploying a release branch](#deploying-a-release-branch)
  - [Deploying a release branch that has conflicts](#deploying-a-release-branch-that-has-conflicts)

## Branch naming convention

Before making any updates to a repository, you need a branch to work on.

Branches are always of the form

    <type>/<TICKET-ID>
    
E.G.

    feat/AUB-126

### Type

The first part of the branch, the TYPE, is based on [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).  
The two most common are:

* feat
* fix

Other types are listed at https://www.conventionalcommits.org/en/v1.0.0/.  
Choose whichever you think fits best.

### Ticket ID

The second part of the branch name is the ticket ID.

For JIRA issues, it will be the ticket ID in JIRA.

E.G. `POR-98`, or `AUB-126`.

Simply create your branch with the name as above, branching from `main`.

    git checkout main
    git pull
    git checkout -b feat/AUB-126
    git push -u origin feat/AUB-126

[(top)](#github-contribution-guidelines)

## Committing your work

Our commits also try to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

In its simplest form, each commit should:

- Start with one of the predefined types
- Be tagged with its ticket ID
- Have a short explanation of what the commit does. This message should fit into the sentence "Applying this commit will ______".

Altogether that might look like:

    feat(PCS-608): change primary colors from red to green

This allows us to easily see which issue each addition came from and what it's for.

Remember to commit often, and try to never rewrite commit history once you've pushed
to GitHub. However, before pushing your commits, you're free to rebase and
rewrite as you like.

[(top)](#github-contribution-guidelines)

## Submitting work for review

When submitting work for review, there are a few options:
the `main` branch, a `release-xxxxx` branch, or an environment like `staging` or `production`.

If you're not sure which branch you should be submitting to, ask the tech lead
or another senior on the project.

### The main branch

- Used when a site has not yet launched, or for some small sites with only one environment
- Submit a pull-request to `main`, following the below guidelines

### The release branch

- Used for busy projects where batches of code are released at a time
- Releases are created in JIRA, and tickets are tagged with a Fix Version that matches the release name
- A Release branch is created which matches the ID of the Release in JIRA - e.g. `release-17762`. It should be created from `main`.
- Submit a pull-request to the release branch matching the Fix Version of your JIRA ticket

#### Creating a release branch

To get a release branch, a release must be made in the related JIRA project.

The ID of the release (NOT the name/title) will be a 5 digit number, and you can
find this number in the releases URL on JIRA.

The name of the release must conform to [Semantic Versioning](https://semver.org/),
and should increment from the most recent release - e.g. 1.0.10

If your code is a bugfix, it should increment the patch version number. If it's
a change or a small feature, the minor version. And if it's a large feature or
an overhaul of some kind, it should be a major version.

### The environment branches

- Used once a site has launched but the project is not busy enough to need releases
- Submit a pull-request to the environment branch - e.g. `staging` or `production`

### Creating a Pull Request

You can create a pull-request at github.com or using the [github CLI](https://cli.github.com/).

When creating the pull-request, always add a description, a link to the JIRA ticket and screenshots if appropriate.

Once approved, you'll be able to merge your code into the release, and then
delete the original branch.

> The original branch is never entirely deleted. You can easily restore it from the closed PR, or later on from reflog.

[(top)](#github-contribution-guidelines)

## Deploying work to live environments

### Staging

Deploying to Staging is very similar to merging with a release.

Simply checkout the release you want to deploy, and create a pull-request to
the `staging` branch. The title must be `Staging Deployment vX.X.X`, where X.X.X
is the name of the release, e.g. v1.0.1

    hub pull-request -b staging
    ...
    "Staging Deployment v1.0.1"

>Remember, you should alias git to hub in your ~/.bashrc or equivalent, so you
you can use `git pull-request ...` instead of `hub`.

This then requires approval, and once approved, will be able to be merged.

The only difference is, when merging, **add `[deploy: staging]` to the end of
the commit message**. This will activate the automatic deployment hook, and
immediately begin deploying the changes to the staging box for that project.

If you are deploying multiple releases at the same time, only add the hook to
the final merge, so you only need to deploy once.

### Production

Deploying to Production is mostly the same as above, except for three changes:

The first is that **the deployment hook is now `[deploy: production]`**.

The second is the title should be `Production Deployment vX.X.X`.

And the last is that, when creating a Production PR, you must also create the
PR to the `main` branch as well. **`main` and `production` must be updated
simultaneously, and kept in sync.**

### Main

Main is the most simple - there is no deployment hook and no other PRs to
think about. Just `hub pull-request -b main`, and call it
`Main Release vX.X.X`.

Once approved, your code will be merged in to `main`, where it will finally be
complete and available to all.

[(top)](#github-contribution-guidelines)

# Git(Hub) Workflow Overview

## Submitting to a release branch

If you would like to submit a pull request, please follow the below Git
process/workflow. It helps to give us a better paper-trail, and allows us to
follow work through the issue/pull request process.

1. **Ensure there is an issue created for the proposed addition/change/fix.**  
    This provides a central home for all discussion related to an issue, be it
    on GitHub or JIRA issues.
2. **Create a new branch in the style `<type>/<TICKET-ID>`.**  
    Please read the
    [Branch Naming Convention](#branch-naming-convention) section above for
    where these values come from.
3. **Ensure all unit tests are passing**.  
    and tests are added or updated appropriately for any new code.
4. **Start all commit messages with a reference `type(TICKET-ID):`.**  
    e.g. `fix(PCS-124): fix typo on homepage`.
5. **Delineate your changes in CHANGELOG.md**  
    if there is one in the project. Under “[Unreleased]”, make an entry in 
    the the appropriate section, i.e. "Fixes", "Breaking changes", 
    "New features" or "Minor changes", in that order.
6. **Create a Pull Request from your branch to the base branch.**  
    This should contain a description about the changes, usually stating why and sometimes how.
    The title should also use the same reference `type(TICKET-ID):` as all the commit
    messages. It should also contain a link to the JIRA ticket in question.
7. **Once approved, merge and delete the source branch.**  
    This is required to keep the repository branches clean. You can easily restore the branch from
    within the closed Pull Request in GitHub.

## Deploying a release branch

1. **Create a Pull Request from your release to the environment branch.** These
   branches will be called `staging` or `production`. When PRing to Production,
   ALWAYS create a second PR to `main` as well for the same release.
2. **Name the Pull Request correctly.** That is, `Staging|Production Deployment
   v1.0.0` or `Main Release v1.0.0` where the version is the Release Name in
   JIRA.
3. **Once approved, deploy using the deploy hook.** `[deploy: staging]` or
   `[deploy: production]` on the commit message.
4. **Update the ticket status in JIRA** to move it to Deployed to Staging or
   Deployed to Production. Ensure you let the ticket owner know its status.

## Deploying a release branch that has conflicts

0. If you're deploying to Production, you just need to merge main into your
   release branch and solve conflicts there. If after doing this and pushing,
   you still have conflicts, please contact a senior developer.
1. For Staging, **create a `conflict-XXXXX` branch from main**, where XXXXX is
   the same ID as the release branch has.
2. **Merge Staging into the conflict branch** using a regular merge, e.g. `git
   merge staging`.
3. **Merge the release into the conflict branch** using a no-fast-forward merge,
   e.g. `git merge --no-ff release-XXXXX`.
4. **Solve the conflicts and merge.** We use a conflict branch for this so that
   all of the Staging history doesn't enter the release branch when it is
   deployed to Production.
5. **Create a pull request to Staging from `conflict-XXXXX`** and then proceed as
   above, making sure the conflict branch is immediately deleted on merge.
   DO NOT MERGE THE CONFLICT BRANCH INTO PRODUCTION OR MAIN.


[(top)](#github-contribution-guidelines)
