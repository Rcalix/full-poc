import { Injectable } from '@nestjs/common';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';
import { Octokit, App } from 'octokit';
import config from '../../config';

@Injectable()
export class GithubService {
  private readonly octokit: Octokit;

  constructor() {
    const accessToken = config().github.accessToken;
    this.octokit = new Octokit({ auth: accessToken });
  }
  async findAll() {
    const userName = config().github.githubUser || '';
    const user = await this.getCommitList(userName);
    return JSON.stringify(user);
  }

  create(createGithubDto: CreateGithubDto) {
    return `This action returns all github`;
  }

  findOne(id: number) {
    return `This action returns a #${id} github`;
  }

  update(id: number, updateGithubDto: UpdateGithubDto) {
    return `This action updates a #${id} github`;
  }

  remove(id: number) {
    return `This action removes a #${id} github`;
  }

  async getUser(username: string) {
    const { data } = await this.octokit.request(`GET /users/${username}`);
    return data;
  }

  async getRepos(username: string) {
    const { data } = await this.octokit.rest.repos.get({
      owner: config().github.githubUser || '',
      repo: config().github.githubRepo || '',
    });
    return data;
  }

  async getBranches(username: string) {
    const { data } = await this.octokit.rest.repos.listBranches({
      owner: config().github.githubUser || '',
      repo: config().github.githubRepo || '',
    });
    return data;
  }

  async getCommitList(username: string) {
    console.log(config(), 'INFORMATION');
    const { data } = await this.octokit.rest.repos.listCommits({
      owner: config().github.githubUser || '',
      repo: config().github.githubRepo || '',
    });
    return data;
  }
}
