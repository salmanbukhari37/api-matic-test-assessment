export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Transpile ESM and JSX
  },
  extensionsToTreatAsEsm: [".js"], // Treat `.js` files as ESM
  moduleNameMapper: {
    "react-markdown": "<rootDir>/node_modules/react-markdown", // Ensure correct path resolution
  },
};
