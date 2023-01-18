#! /usr/bin/env node

import prompts from "prompts";
import fs from "fs";
import {downloadGitRepository, getGitRemoteRepositoryBranches} from "../utils/child-process.mjs";

const repositoryUrl = "https://github.com/blackawn/create-cli-template.git"

getGitRemoteRepositoryBranches(repositoryUrl, (branches) => {

  prompts([
      // project name
    {
      type: 'text',
      name: 'projectName',
      message: 'What is the name of your project?',
      initial: 'project-test',
      validate: value => (value === '.' || value.match(/^[a-zA-Z0-9-_]+$/)) ?
          true :
          'Please enter a valid project name using only letters, numbers, dashes, or underscores.'
    },
      // branches select
    {
      type: 'select',
      name: 'template',
      message: 'What template do you want to use?',
      choices: branches.map(branch => {
        return {
          title: branch,
          value: branch
        }
      })
    },
      // create sure
    {
      type: 'toggle',
      name: 'value',
      message: 'Are you sure you want to create this project?',
      initial: true,
      active: 'yes',
      inactive: 'no'
    },
  ]).then((result) => {

    const {projectName, template, value} = result;

    if (!template || !value) return

    downloadGitRepository(repositoryUrl, template, projectName, () => {
      // delete .git file
      const rmFile = `${projectName}/.git`;
      if (fs.existsSync(rmFile)) {
        fs.rmSync(rmFile, {recursive: true});
      }
      // change name to package.json
      if (fs.existsSync(`${projectName}/package.json`)) {
        const packageJson = JSON.parse(String(fs.readFileSync(`${projectName}/package.json`)));
        packageJson.name = projectName;
        fs.writeFileSync(`${projectName}/package.json`, JSON.stringify(packageJson, null, 2));
      }
    })
  });
});
