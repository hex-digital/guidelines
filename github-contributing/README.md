# Git(Hub) Contribution Guidelines

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
  - [Master](#master)
- [Git(Hub) Workflow Overview](#github-workflow-overview)
  - [Submitting to a release branch](#submitting-to-a-release-branch)
  - [Deploying a release branch](#deploying-a-release-branch)
  - [Deploying a release branch that has conflicts](#deploying-a-release-branch-that-has-conflicts)

## Branch naming convention

Before making any updates to a repository, you need a branch to work on.

Branches are always of the form

    <type>/<CODE>-XXX

### Type

The first part of the branch, the TYPE, will fall into one of the following
categories:

* feature
* change
* bugfix
* hotfix

For JIRA issues, the type of branch will usually be specified by the ticket type
field. If not, simply decide the type yourself, and make a note of it on the
ticket description.

### Code

The second part of the branch names show which project it is for.

For JIRA issues, it will be the associated project code (2-4 letters) from JIRA.

E.G. `POR` for Portal, or `AUB` for Aubaine.

### Reference Number

The final part, the reference number, will be the ID of the issue.

For JIRA issues, that will be the issue ID, listed on the issue itself.

    <type>/<CODE>-XXX  # e.g. change/PCS-12, feature/SS-124, bugfix/HSB-96

Simply create your branch with the name as above, branching from `master`.

    git checkout master
    git pull
    git checkout -b <branch-name>
    git push -u origin <branch-name>

[(top)](#contributing-to-a-github-project)

## Committing your work

All commits in the branch must start with `[<CODE>-XXX]` on the commit message,
e.g. `[PCS-608] Change primary colors from red to green`.

They should then go on to have a short explanation of what has been done in
that commit.

This allows us to easily see which issue each addition came and what it's for.

Remember to commit often, and never to rewrite commit history once you've pushed
to origin. However, before pushing your commits, you're free to rebase and
rewrite as you like.

[(top)](#contributing-to-a-github-project)

## Submitting work for review

### The release branch

Once your code is complete and pushed to origin, it needs to go into a release
branch. A release branch is of the form `release-XXXXX` and is used to group
issues together ready to be deployed to Staging, Production or merged into the
base branch.

Release branches are important as they make deployments easier to track and
more straight forward.

Each issue in JIRA must have a release branch attached, and this is done via the
"Fix Version" field on an issue, where you enter the release name (e.g. v1.0.0).

### Creating a release branch

To get a release branch, a release must be made in the related JIRA project.

The ID of the release (NOT the name/title) will be a 5 digit number, and you can
find this number in the releases URL on JIRA.

The name of the release must conform to [Semantic Versioning](https://semver.org/),
and should increment from the most recent release.

If your code is a bugfix, it should increment the patch version number. If it's
a change or a small feature, the minor version. And if it's a large feature or
an overhaul of some kind, it should be a major version.

### Pull Requesting to the release branch

First of all, ensure your issue in JIRA has a Fix Version, then find the ID of
that version's release. You can do this by opening the Releases tab in the side
bar, then clicking on the release name. It will be in the URL.

Next, create the branch from `master`, called `release-XXXXX`, where XXXXX is
the release ID, and push this to origin. Finally, pull-request your work in to
it, using `hub pull-request -b release-XXXXX` or [GitHub](https://github.com).

>It is advised to alias git to hub in your ~/.bashrc or equivalent, as hub
extends all git functionality. Then you can use `git pull-request ...` instead.

You must prefix the PR with the same refs as the commit (`[<CODE>-XXX]`),
followed by a short title describing the pull request.

You must also include a longer description, detailing why something was
required, and how you completed the requirements. An example is below:

    [AUB-126] Add menu filtering
    Why?
    * The menu pages required a filtering method for dietary needs

    How?
    * The filters were built as per the designs in Zeplin
    * Tags were used to categorise menu items
    * JavaScript click events add the filters to an array, and then fade out
    items which are not associated with every tag in the array

Once approved, you'll be able to merge your code into the release, and then
delete the original branch.

>Do not worry about deleting the original branch, as it is never entirely lost.
You can easily restore it from the closed PR, or later on from reflog.

[(top)](#contributing-to-a-github-project)

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
PR to the `master` branch as well. **`master` and `production` must be updated
simultaneously, and kept in sync.**

### Master

Master is the most simple - there is no deployment hook and no other PRs to
think about. Just `hub pull-request -b master`, and call it
`Master Release vX.X.X`.

Once approved, your code will be merged in to `master`, where it will finally be
complete and available to all.

[(top)](#contributing-to-a-github-project)

# Git(Hub) Workflow Overview

## Submitting to a release branch

If you would like to submit a pull request, please follow the below Git
process/workflow. It helps to give us a better paper-trail, and allows us to
follow work through the issue/pull request process.

1. **Ensure there is an issue created for the proposed addition/change/fix.**
   This provides a central home for all discussion related to an issue, be it
   on GitHub or JIRA issues.
2. **Create a new branch in the style `<type>/<CODE>-XXX`.** Please read the
    [Branch Naming Convention](#branch-naming-convention) section above for
    where these values come from.
3. **Ensure all unit tests are passing**, and tests are added or updated
   appropriately for any new code.
4. **Start all commit messages with a reference `[<CODE>-XXX]`.** e.g.
   `[PCS-124] Fix typo on homepage`.
5. **Delineate your changes in CHANGELOG.md** if there is one in the project.
   Under “[Unreleased]”, make an entry in the the appropriate section, i.e.
   "Fixes", "Breaking changes", "New features" or "Minor changes", in that order.
6. **Ensure your issue has a Fix Version attached**, as this is the release that
   the ticket must go in to.
7. **Create a release branch `release-XXXXX`** where XXXXX is the ID of the
   release attached to the issue, from the URL of the release page.
8. **Create a Pull Request from your branch to the release branch.** This should
   contain a message stating Why you've made changed, and How you've made them.
   The title should also use the same reference as all the commit messages.
   It should also contain a link to the JIRA ticket in question.
9. **Once approved, merge and delete the source branch.** This is required to
   keep the repository branches clean. You can easily restore the branch from
   within the closed Pull Request in GitHub.

## Deploying a release branch

1. **Create a Pull Request from your release to the environment branch.** These
   branches will be called `staging` or `production`. When PRing to Production,
   ALWAYS create a second PR to `master` as well for the same release.
2. **Name the Pull Request correctly.** That is, `Staging|Production Deployment
   v1.0.0` or `Master Release v1.0.0` where the version is the Release Name in
   JIRA.
3. **Once approved, deploy using the deploy hook.** `[deploy: staging]` or
   `[deploy: production]` on the commit message.
4. **Update the ticket status in JIRA** to move it to Deployed to Staging or
   Deployed to Production. Ensure you let the ticket owner know its status.

## Deploying a release branch that has conflicts

0. If you're deploying to Production, you just need to merge master into your
   release branch and solve conflicts there. If after doing this and pushing,
   you still have conflicts, please contact a senior developer.
1. For Staging, **create a `conflict-XXXXX` branch from master**, where XXXXX is
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
   DO NOT MERGE THE CONFLICT BRANCH INTO STAGING.


[(top)](#contributing-to-a-github-project)
