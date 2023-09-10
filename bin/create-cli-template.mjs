#! /usr/bin/env node

import prompts from "prompts";
import path from "path";
import fs from "fs";
import { language } from '../i18n/index.mjs';
import { downloadGitRepository, getGitRemoteRepositoryBranches } from "../utils/child-process.mjs";

const repositoryUrl = "https://github.com/blackawn/create-cli-template.git";

const currentDir = path.resolve('.');
const isRootDir = currentDir === path.parse(currentDir).root;

getGitRemoteRepositoryBranches(repositoryUrl, (branches) => {

  const locale = Intl.DateTimeFormat().resolvedOptions().locale;

  prompts([
    // project name
    {
      type: 'text',
      name: 'projectName',
      message: language[locale] ? language[locale].message1 : language['en-US'].message1,
      initial: 'project-template',
      validate: async (value) => {
        if (value === '.') {
          if (!isRootDir) {
            return true;
          } else {
            return language[locale] ? language[locale].error1 : language['en-US'].error1;
          }
        } else if (value.match(/^[a-zA-Z0-9-_]+$/)) {
          return true;
        } else {
          return language[locale] ? language[locale].error2 : language['en-US'].error2;
        }
      }
    },
    // branches select
    {
      type: 'select',
      name: 'template',
      message: language[locale] ? language[locale].message2 : language['en-US'].message2,
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
      message: language[locale] ? language[locale].message3 : language['en-US'].message3,
      initial: true,
      active: 'yes',
      inactive: 'no'
    },
  ]).then((result) => {

    const { projectName, template, value } = result;

    if (!template || !value) return


    downloadGitRepository(repositoryUrl, template, projectName, () => {

      // delete .git file
      const deleteFile = ['.git', '.vscode'];

      deleteFile.forEach(async (file) => {
        const filePath = `${projectName}/${file}`
        if (fs.existsSync(filePath)) {
          fs.rmSync(filePath, { recursive: true });
        }
      });

      // change name to package.json
      if (fs.existsSync(`${projectName}/package.json`)) {
        const packageJson = JSON.parse(String(fs.readFileSync(`${projectName}/package.json`)));
        packageJson.name =
          projectName === '.' ?
            path.basename(process.cwd()) : projectName;
        fs.writeFileSync(`${projectName}/package.json`, JSON.stringify(packageJson, null, 2));
      }
    })
  });
});
