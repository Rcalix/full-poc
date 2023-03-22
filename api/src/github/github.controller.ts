import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GithubService } from './github.service';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
  async getUser() {
    return this.githubService.findUser();
  }

  @Get('/repos')
  async getRepos() {
    return this.githubService.findAllRepos();
  }

  @Get('/commits')
  async getCommits() {
    return this.githubService.findAllCommits();
  }

  @Get('/branches')
  async getBranches() {
    return this.githubService.findAllBranches();
  }
}
