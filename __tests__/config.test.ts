import { FlatESLint } from 'eslint/use-at-your-own-risk';
import {rawFixture, readFixture} from "./__utils/data";

describe('eslint config', () => {
  it('should lint a basic TypeScript file without errors', async () => {
    const eslint = new FlatESLint({
      overrideConfigFile: './index.cjs',
    });

    const results = await eslint.lintText(rawFixture('1/file.txt'), { filePath: 'test.ts' });
    const expected = await readFixture('1/expected.json');
    // @ts-ignore
    expected[0].filePath = `${process.cwd()}/test.ts`

    expect(results).toEqual(expected)
  });
});
