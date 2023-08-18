/* eslint-env node */
const { readFileSync } = require('fs');
const { join } = require('path');
const getOpts = require('conventional-changelog-conventionalcommits');

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
                    transform: async (commit, context) => {
                        const opts = await getOpts();
                        const defaultTransform = opts.writerOpts.transform;
                        const rawCommit = JSON.parse(JSON.stringify(commit));
                        const preTransformedCommit = defaultTransform(
                            commit,
                            context
                        );
                        if (preTransformedCommit) {
                            console.log('raw commit:', rawCommit);
                            console.log('preTransformedCommit:', preTransformedCommit);
                        }

                        return preTransformedCommit;
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
