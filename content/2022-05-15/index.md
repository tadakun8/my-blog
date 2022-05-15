---
title: "StorybookでChakraUIコンポーネントの色が反映されない"
date: "2022-05-15"
tags: ["React", "Chakra UI", "Storybook"]
---

Storybook で ChakraUI で構築した自分のコンポーネントの色が反映されなかったので調査しました

## 結論

`@snek-at/storybook-addon-chakra-ui`をインストールして、`storybook/main.js`に addon として追加する

```
❯❯❯ npm install -D @snek-at/storybook-addon-chakra-ui
```

```diff
// storybook/main.js

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
+   "@snek-at/storybook-addon-chakra-ui",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
```

package.json はこんな感じ

```
  "dependencies": {
    "@chakra-ui/react": "^2.0.0",
    "@chakra-ui/storybook-addon": "^2.0.0",
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "firebase": "^9.8.1",
    "framer-motion": "^6.3.3",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.6.4",
    "web-vitals": "^2.1.4"
  },
  "devDependencies": {
    "@snek-at/storybook-addon-chakra-ui": "^1.0.0",
    "@storybook/addon-actions": "^6.4.22",
    "@storybook/addon-essentials": "^6.4.22",
    "@storybook/addon-interactions": "^6.4.22",
    "@storybook/addon-links": "^6.4.22",
    "@storybook/builder-webpack5": "^6.4.22",
    "@storybook/manager-webpack5": "^6.4.22",
    "@storybook/node-logger": "^6.4.22",
    "@storybook/preset-create-react-app": "^4.1.0",
    "@storybook/react": "^6.4.22",
    "@storybook/testing-library": "^0.0.11",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.1",
    "@types/node": "^16.11.35",
    "@types/react": "^18.0.9",
    "@types/react-dom": "^18.0.4",
    "@typescript-eslint/eslint-plugin": "^5.23.0",
    "@typescript-eslint/parser": "^5.23.0",
    "eslint": "^8.15.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-react": "^7.29.4",
    "eslint-plugin-storybook": "^0.5.11",
    "prettier": "^2.6.2",
    "webpack": "^5.72.1"
  }
```
