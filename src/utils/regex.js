/**
 * Check if the current path matches the target path
 * @param {string} currentPath Current path
 * @param {string} targetPath Target path
 * @returns {boolean} Does the current path match the target path?
 */
export const matchPath = (currentPath, targetPath) => {
    const regex = new RegExp(`^${targetPath}(?:/[a-zA-Z0-9_-]+)?$`)
    return currentPath.match(regex)
}

export const flOzRegex = /\bfl-oz\b/i