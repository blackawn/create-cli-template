#! /usr/bin/env node

import prompts from "prompts";
import fs from "fs";
import {downloadGitRepository, getGitRemoteRepositoryBranches} from "../utils/child-process.mjs";


const repositoryUrl = "https://github.com/blackawn/create-cli-template.git"

getGitRemoteRepositoryBranches(repositoryUrl, (branches) => {

  prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'What is the name of your project?',
      initial: 'project-test',
      validate: value => (value === '.' || value.match(/^[a-zA-Z0-9-_]+$/)) ?
          true :
          'Please enter a valid project name using only letters, numbers, dashes, or underscores.'
    },
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
      const rmFile = `${projectName}/.git`;
      if (fs.existsSync(rmFile)) {
        fs.rmSync(rmFile, {recursive: true});
      }
    })
  });
});
