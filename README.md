# @vue/test-utils peerDependencies Issue Example

This repository demonstrates an issue where `@vue/test-utils` cannot find `@vue/compiler-dom` in a pnpm environment with strict hoist settings.

## Problem

When using `@vue/test-utils` in a pnpm workspace with `hoist: false` and `shamefullyHoist: false`, the following error occurs:

```
Error: Cannot find module '@vue/compiler-dom'
Require stack:
- node_modules/.pnpm/@vue+test-utils@2.4.6/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js
```

You can verify this error in CI: [Failed CI run](https://github.com/kimulaco/vue-test-utils-peer-dependencies-example/actions/runs/20521381439/job/58957183490)

## Reproduction

```bash
pnpm install
pnpm test
```

## Expected Solution

Adding `@vue/compiler-dom` to `@vue/test-utils`'s `peerDependencies` would allow pnpm to properly resolve the dependency.

## Workaround

You can use `packageExtensions` in `pnpm-workspace.yaml` to manually override peerDependencies. This workaround is demonstrated in the [`solution` branch](https://github.com/kimulaco/vue-test-utils-peer-dependencies-example/tree/refs/heads/solution), where the error does not occur.

See the [successful CI run](https://github.com/kimulaco/vue-test-utils-peer-dependencies-example/actions/runs/20521490248/job/58957444615) for the solution branch.
