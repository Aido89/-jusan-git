import { execSync } from 'child_process';

module.exports = async function () {
  console.log('\nSetting up...\n');
  execSync('npx nx serve api', { stdio: 'inherit' });
  await new Promise(resolve => setTimeout(resolve, 5000));
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
