/* eslint-env node */
const { readFileSync } = require('fs');
const { join } = require('path');

// const defaultTransform = (commit, context) => {
//     let discard = true;
//     const issues = [];
//     const entry = findTypeEntry(config.types, commit);

//     // adds additional breaking change notes
//     // for the special case, test(system)!: hello world, where there is
//     // a '!' but no 'BREAKING CHANGE' in body:
//     addBangNotes(commit);

//     // Add an entry in the CHANGELOG if special Release-As footer
//     // is used:
//     if (
//         (commit.footer && releaseAsRe.test(commit.footer)) ||
//         (commit.body && releaseAsRe.test(commit.body))
//     ) {
//         discard = false;
//     }

//     commit.notes.forEach((note) => {
//         note.title = 'BREAKING CHANGES';
//         discard = false;
//     });

//     // breaking changes attached to any type are still displayed.
//     if (discard && (entry === undefined || entry.hidden)) {
//         return;
//     }

//     if (entry) {
//         commit.type = entry.section;
//     }

//     if (commit.scope === '*') {
//         commit.scope = '';
//     }

//     if (typeof commit.hash === 'string') {
//         commit.shortHash = commit.hash.substring(0, 7);
//     }

//     if (typeof commit.subject === 'string') {
//         // Issue URLs.
//         config.issuePrefixes.join('|');
//         const issueRegEx =
//             '(' + config.issuePrefixes.join('|') + ')' + '([0-9]+)';
//         const re = new RegExp(issueRegEx, 'g');

//         commit.subject = commit.subject.replace(re, (_, prefix, issue) => {
//             issues.push(prefix + issue);
//             const url = expandTemplate(config.issueUrlFormat, {
//                 host: context.host,
//                 owner: context.owner,
//                 repository: context.repository,
//                 id: issue,
//                 prefix: prefix,
//             });

//             return `[${prefix}${issue}](${url})`;
//         });
//         // User URLs.
//         commit.subject = commit.subject.replace(
//             /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
//             (_, user) => {
//                 // TODO: investigate why this code exists.
//                 if (user.includes('/')) {
//                     return `@${user}`;
//                 }

//                 const usernameUrl = expandTemplate(config.userUrlFormat, {
//                     host: context.host,
//                     owner: context.owner,
//                     repository: context.repository,
//                     user: user,
//                 });

//                 return `[@${user}](${usernameUrl})`;
//             }
//         );
//     }

//     // remove references that already appear in the subject
//     commit.references = commit.references.filter((reference) => {
//         if (issues.indexOf(reference.prefix + reference.issue) === -1) {
//             return true;
//         }

//         return false;
//     });

//     return commit;
// };

module.exports = {
    branches: [
        'main',
        '+([0-9])?(.{+([0-9]),x}).x',
        { name: 'next', prerelease: true },
        { name: 'dev', prerelease: true },
        { name: 'beta', prerelease: true },
        { name: 'alpha', prerelease: true },
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                writerOpts: {
                    commitPartial: readFileSync(
                        join(__dirname, 'commit.hbs'),
                        'utf-8'
                    ),
                    transform: (commit, context) => {
                        console.log(
                            'commit to transform:',
                            JSON.stringify(commit, null, 2),
                            'context:',
                            JSON.stringify(context, null, 2)
                        );
                        const { writerOpts } = require('conventional-changelog-conventionalcommits');
                        // const preTransformedCommit = defaultTransform(
                        //     commit,
                        //     context
                        // );
                        console.log(
                            'writerOpts:',
                            JSON.stringify(writerOpts, null, 2)
                        );

                        return commit;
                    },
                },
            },
        ],
        '@semantic-release/changelog',
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                message:
                    // eslint-disable-next-line no-template-curly-in-string
                    'chore(release): ${nextRelease.version} [release]\n\n${nextRelease.notes}',
            },
        ],
        [
            '@semantic-release/github',
            {
                failComment: false,
                failTitle: false,
                labels: false,
            },
        ],
    ],
    npmPublish: false,
};
