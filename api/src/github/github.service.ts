import { Injectable } from '@nestjs/common';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';
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
  async findAll() {
    const user = await this.getCommitList();
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
