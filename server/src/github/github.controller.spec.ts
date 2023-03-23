import { Test, TestingModule } from '@nestjs/testing';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';
import { ConfigService } from '@nestjs/config';

describe('GithubController', () => {
  let controller: GithubController;
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [
        GithubService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(() => 'value'),
          },
        },
      ],
    }).compile();

    controller = module.get<GithubController>(GithubController);
    service = module.get<GithubService>(GithubService);
  });

  describe('getUser', () => {
    it('should return a user', async () => {
      const user = JSON.stringify({ id: 123, name: 'Test User' });
      jest.spyOn(service, 'findUser').mockResolvedValue(user);
      expect(await controller.getUser()).toBe(user);
    });
  });

  describe('getRepos', () => {
    it('should return a list of repositories', async () => {
      const repos = JSON.stringify([
        { id: 1, name: 'Repo 1' },
        { id: 2, name: 'Repo 2' },
      ]);
      jest.spyOn(service, 'findAllRepos').mockResolvedValue(repos);
      expect(await controller.getRepos()).toBe(repos);
    });
  });

  describe('getCommits', () => {
    it('should return a list of commits', async () => {
      const commits = JSON.stringify([
        { id: 1, message: 'Commit 1' },
        { id: 2, message: 'Commit 2' },
      ]);
      jest.spyOn(service, 'findAllCommits').mockResolvedValue(commits);
      expect(await controller.getCommits()).toBe(commits);
    });
  });

  describe('getBranches', () => {
    it('should return a list of branches', async () => {
      const branches = JSON.stringify([
        { id: 1, name: 'Branch 1' },
        { id: 2, name: 'Branch 2' },
      ]);
      jest.spyOn(service, 'findAllBranches').mockResolvedValue(branches);
      expect(await controller.getBranches()).toBe(branches);
    });
  });
});
