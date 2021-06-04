# Gitpodify

A handy bookmarklet you can use to open a GitHub, GitLab, or Bitbucket repository in a Gitpod containerized environment.

# Usage
To use Gitpodify, click the clipboard icon to copy the bookmarklet to your clipboard
```javascript
javascript:(function(){var repoURL = window.location.href; window.open("https://gitpod.io/#" + repoURL, "_blank"); window.focus();})();
```
, then open your bookmarks manage and create a new bookmark by pasting the bookmarklet where the url would go.
