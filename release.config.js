/* eslint-env node */
const { readFileSync } = require('fs');
const { join } = require('path');

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
                    commitPartial: readFileSync(join(__dirname, 'commit.hbs'), 'utf-8'),
                    transform: (commit, context) => {
                        // console.log('commit to transform:', JSON.stringify(commit, null, 2), 'context:', JSON.stringify(context, null, 2));
                        const isReleaseType = !!(['feat', 'fix', 'perf', 'revert', 'docs'].find((type) => type === commit.type));
                        const hasNote = commit.notes.length > 0;
                        if (typeof commit.body === 'string') {
                            commit.body = commit.body.replace(/\n\n/, '\n');
                        }
                        if (isReleaseType || hasNote) {
                            return commit;
                        }
                        return null;
                    }
                }
            }
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
    npmPublish: true,
};
