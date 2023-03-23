import { ConfigService } from '@nestjs/config';

export default (configService: ConfigService) => ({
  github: {
    accessToken: configService.get('GITHUB_ACCESS_TOKEN'),
    githubUser: configService.get('GITHUB_USER'),
    githubRepo: configService.get('GITHUB_REPO'),
  },
});
