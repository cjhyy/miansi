import { parseError } from '../src/index';
import {fixtureFirefoxStack,fixtureStack} from './Error'
test('Chrom 测试', () => {
    expect(parseError(fixtureStack)).toEqual({
        message: 'Error raised',
        stack: [
          {
            line: 2,
            column: 9,
            filename: 'http://192.168.31.8:8000/c.js'
          }
        ]
      });
});
test('火狐 测试', () => {
    expect(parseError(fixtureFirefoxStack)).toEqual({
        message: '',
        stack: [
          {
                line: 2,
                column: 9,
                filename: 'http://192.168.31.8:8000/c.js'
          },
          {
            line: 4,
            column: 15,
            filename: 'http://192.168.31.8:8000/b.js'
          },
          {
            line: 4,
            column: 3,
            filename: 'http://192.168.31.8:8000/a.js'
          },          {
            line: 22,
            column: 3,
            filename: 'http://192.168.31.8:8000/a.js'
          }
        ]
      });
});

