import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { GithubService } from './github.service';
import { Octokit } from 'octokit';

describe('GithubService', () => {
  let githubService: GithubService;
  let octokit: Octokit;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubService,
        ConfigService,
        {
          provide: Octokit,
          useValue: {
            request: jest.fn(),
            rest: {
              repos: {
                get: jest.fn(),
                listBranches: jest.fn(),
                listCommits: jest.fn(),
              },
            },
          } as Octokit, // Fixed TypeScript error: use "as Octokit" to assign the value
        },
      ],
    }).compile();

    githubService = module.get<GithubService>(GithubService);
    octokit = module.get<Octokit>(Octokit);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('findAllRepos', () => {
    it('should return an array of repos', async () => {
      const repos = JSON.stringify([
        { id: 1, name: 'repo1' },
        { id: 2, name: 'repo2' },
      ]);
      jest.spyOn(githubService, 'getRepos').mockResolvedValue(repos);
      const result = await githubService.findAllRepos();
      expect(JSON.parse(result)).toEqual(JSON.parse(repos)); // Fixed TypeScript error: convert "repos" to JSON parse
    });
  });

  describe('findAllBranches', () => {
    it('should return an array of branches', async () => {
      const branches = JSON.stringify([
        { name: 'branch1' },
        { name: 'branch2' },
      ]);
      jest.spyOn(githubService, 'getBranches').mockResolvedValue(branches);
      const result = await githubService.findAllBranches();
      expect(JSON.parse(result)).toEqual(JSON.parse(branches)); // Fixed TypeScript error: convert "branches" to JSON parse
    });
  });

  describe('findAllCommits', () => {
    it('should return an array of commits', async () => {
      const commits = [
        { sha: '1234', message: 'commit1' },
        { sha: '5678', message: 'commit2' },
      ];
      jest.spyOn(githubService, 'getCommitList').mockResolvedValue(commits);
      const result = await githubService.findAllCommits();
      expect(result).toEqual(commits); // Fixed TypeScript error: remove JSON parse conversion as "commits" is already an array
    });
  });

  describe('findUser', () => {
    it('should return a user object', async () => {
      const user = JSON.stringify({ id: 1, name: 'John Doe' });
      jest.spyOn(githubService, 'getUser').mockResolvedValue(user);
      const result = await githubService.findUser();
      expect(JSON.parse(result)).toEqual(JSON.parse(user)); // Fixed TypeScript error: convert "user" to JSON parse
    });
  });
});

