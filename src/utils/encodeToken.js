import * as core from '@actions/core';

const run = async () => {
  try {
    const accessToken = core.getInput('access_token', { required: true });
    const refreshedAccessToken = 'refreshed ' + accessToken

    core.setSecret(refreshedAccessToken);

    core.setOutput('access_token', refreshedAccessToken);
  } catch (error) {
    core.setFailed(handleAxiosError(error));
  }
};

if (process.env.NODE_ENV !== 'test') {
  run();
}

export default run;