const fs = require('fs');

const yaml = require('js-yaml');
const fetch = require('node-fetch');

function getRepoList() {
  const file = fs.readFileSync('apps.yaml');
  const repos = yaml.load(file);
  return repos;
}

async function getRepoInfo(organization, repo) {
  const repoStats = await fetch(
    `https://api.github.com/repos/${organization}/${repo}`,
  );
  return repoStats.json();
}

async function getPackageJSON(organization, repo, branch) {
  const packageJSON = await fetch(
    `https://raw.githubusercontent.com/${organization}/${repo}/${branch}/package.json`,
  );
  return packageJSON.json();
}

async function getNPMDownloads(name) {
  const downloadsLastWeek = await fetch(
    `https://api.npmjs.org/downloads/point/last-week/${name}`,
  );
  return downloadsLastWeek.json();
}

async function gatherInformation(organization, repo) {
  const repoStats = await getRepoInfo(organization, repo);
  const packageJSON = await getPackageJSON(
    organization,
    repo,
    repoStats.default_branch,
  );
  const downloads = await getNPMDownloads(packageJSON.name);
  let result = {};
  result.name = packageJSON.name;
  result.version = packageJSON.version;
  result.description = packageJSON.description;
  result.github = `https://github.com/${organization}/${repo}`;
  result.npm = `https://www.npmjs.com/package/${packageJSON.name}`;
  // result.logo = packageJSON.cheminfo.logo;
  result.lastUpdate = repoStats.updated_at;
  result.weeklyDownloads = downloads.downloads;
  // result.domain = packageJSON.cheminfo.domain;
  // result.technique = packageJSON.cheminfo.technique;
  // result.fileTypes = packageJSON.cheminfo.functionality.fileTypes;

  return result;
}

async function createAppListing() {
  const repos = getRepoList();
  let compiledInfo = [];
  let data = await gatherInformation('cheminfo', 'tga-spectrum');
  compiledInfo.push(data);
  console.log(compiledInfo);
  fs.writeFile('apps.json', JSON.stringify(compiledInfo), (err) => {
    if (err) {
      throw err;
    }
    console.log('JSON data is saved.');
  });
}

createAppListing();
