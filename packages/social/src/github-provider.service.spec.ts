// std
import { deepStrictEqual, strictEqual } from 'assert';
import { Server } from 'http';

// 3p
import { Config, Context, createApp, createService, Get, HttpResponseBadRequest, HttpResponseOK } from '@foal/core';

// FoalTS
import { SocialTokens } from './abstract-provider.service';
import { GithubProvider } from './github-provider.service';
import { UserInfoError } from './user-info.error';

describe('GithubProvider', () => {

  describe('has a "getUserInfoFromTokens" that', () => {

    class GithubProvider2 extends GithubProvider {
      userInfoEndpoint = 'http://localhost:3000/users/me';
    }

    let server: Server;
    let provider: GithubProvider;

    beforeEach(() => {
      provider = createService(GithubProvider2);
      Config.set('settings.loggerFormat', 'none');
    });

    afterEach(() => {
      Config.remove('settings.loggerFormat');
      if (server) {
        server.close();
      }
    });

    it('should send a request with the access token and return the response body.', async () => {
      const userInfo = { email: 'john@foalts.org' };

      class AppController {
        @Get('/users/me')
        token(ctx: Context) {
          const { authorization } = ctx.request.headers;
          strictEqual(authorization, 'token an_access_token');
          return new HttpResponseOK(userInfo);
        }
      }

      server = createApp(AppController).listen(3000);

      const tokens: SocialTokens = {
        access_token: 'an_access_token',
        token_type: 'token_type'
      };

      const actual = await provider.getUserInfoFromTokens(tokens);
      deepStrictEqual(actual, userInfo);
    });

    it('should throw a UserInfoError if the user info endpoint returns an error.', async () => {
      class AppController {
        @Get('/users/me')
        token() {
          return new HttpResponseBadRequest({
            error: 'bad request'
          });
        }
      }

      server = createApp(AppController).listen(3000);

      const tokens: SocialTokens = {
        access_token: 'an_access_token',
        token_type: 'token_type'
      };

      try {
        await provider.getUserInfoFromTokens(tokens);
        throw new Error('getUserInfoFromTokens should have thrown a TokenError.');
      } catch (error) {
        if (!(error instanceof UserInfoError)) {
          throw error;
        }
        deepStrictEqual(error.error, {
          error: 'bad request'
        });
      }
    });

  });

});
