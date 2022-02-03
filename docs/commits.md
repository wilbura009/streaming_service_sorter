# Consistent Commits

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit type can include the following:

* `feat` – a new feature is introduced with the changes
* `fix` – a bug fix has occurred
* `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
* `refactor` – refactored code that neither fixes a bug nor adds a feature
* `docs` – updates to documentation such as the README or other markdown files
* `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
* `test` – including new or correcting previous tests
* `perf` – performance improvements
* `ci` – continuous integration related
* `build` – changes that affect the build system or external dependencies
* `revert` – reverts a previous commit 


The commit ***<type>*** subject line should be all lowercase with a character limit to encourage succinct descriptions.

The ***[optional body]*** should be used to provide further detail that cannot fit within the character limitations of the subject line description.

It is also a good location to utilize BREAKING CHANGE: ***\<description\>*** to note the reason for a breaking change within the commit.

The ***[optional footer]***. We use the footer to link the JIRA story that would be closed with these changes for example: Closes D2IQ-<JIRA #> .


# Example

```
fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz. 

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>

Closes D2IQ-12345
```

# Commit Message Comparisons

| Good                                                         | Bad                             |
| ------------------------------------------------------------ | ------------------------------- |
| `feat: improve performance with lazy load implementation for images` | `fixed bug on landing page`     |
| `chore: update npm dependency to latest version`             | `Changed style`                 |
| `Fix bug preventing users from submitting the subscribe form` | `oops`                          |
| `Update incorrect client phone number within footer body per client request` | `I think I fixed it this time?` |


### Resource

[Conventional Commits](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)

