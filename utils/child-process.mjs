import {spawn,exec} from 'child_process';

export function downloadGitRepository(repo, branches, destination, callback) {

  const getRepoDownload =
      spawn('git', ['clone', '--progress', '--depth', '1', '-b', branches, repo, destination]);

  getRepoDownload.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  getRepoDownload.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  getRepoDownload.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    callback(code);
  });
}


export function getGitRemoteRepositoryBranches(repo, callback) {

  const gitCommand = `git ls-remote --heads ${repo}`;

  exec(gitCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    const branches = stdout.split('\n')
        .filter(x => x.indexOf('refs/heads/master') === -1)
        .filter(x => x !== '')
        .map(x => x.split('\t')[1].replace('refs/heads/', ''));
    callback(branches);
  });
}

