import { Injectable } from '@nestjs/common';
import { Octokit, App } from 'octokit';
import config from '../../config';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubService {
  private readonly octokit: Octokit;
  private githubAccessToken: string;
  private githubUser: string;
  private githubRepo: string;

  constructor(private configService: ConfigService) {
    this.githubAccessToken =
      this.configService.get<string>('GITHUB_ACCESS_TOKEN') || '';
    this.githubUser = this.configService.get<string>('GITHUB_USER') || '';
    this.githubRepo = this.configService.get<string>('GITHUB_REPO') || '';
    this.octokit = new Octokit({ auth: this.githubAccessToken });
  }
  async findAllRepos() {
    const repos = await this.getRepos();
    return JSON.stringify(repos);
  }

  async findAllBranches() {
    const branches = await this.getBranches();
    return JSON.stringify(branches);
  }

  async findAllCommits() {
    const commits = await this.getCommitList();
    return JSON.stringify(commits);
  }

  async findUser() {
    const user = await this.getUser();
    return JSON.stringify(user);
  }

  async getUser() {
    const { data } = await this.octokit.request(
      `GET /users/${this.githubUser}`,
    );
    return data;
  }

  async getRepos() {
    const { data } = await this.octokit.rest.repos.get({
      owner: this.githubUser,
      repo: this.githubRepo,
    });
    return data;
  }

  async getBranches() {
    const { data } = await this.octokit.rest.repos.listBranches({
      owner: this.githubUser,
      repo: this.githubRepo,
    });
    return data;
  }

  async getCommitList() {
    console.log(this.githubRepo, this.githubAccessToken, 'INFORMATION');
    const { data } = await this.octokit.rest.repos.listCommits({
      owner: this.githubUser,
      repo: this.githubRepo,
    });
    return data;
  }
}
