/**
 * @param object
 * @param object.changedPaths paths changed since last release
 * @param object.fs filesystem
 * */
module.exports = ({ changedPaths, fs, forRelativePath }) => {
  const nodePathsSet = new Set();
  const simplePathsSet = new Set();
  for (const path of changedPaths) {
    const packagePath = (path.match(
      new RegExp(`${forRelativePath}\/[^\/]+`, "g")
    ) || [])[0];
    if (packagePath) {
      if (!fs.existsSync(`./${packagePath}`)) {
        continue;
      }
      if (fs.existsSync(`./${packagePath}/package.json`)) {
        nodePathsSet.add(packagePath.replace(`${forRelativePath}/`, ""));
        continue;
      }
      simplePathsSet.add(packagePath.replace(`${forRelativePath}/`, ""));
    }
  }

  return {
    nodePaths: Array.from(nodePathsSet),
    simplePaths: Array.from(simplePathsSet),
  };
};
