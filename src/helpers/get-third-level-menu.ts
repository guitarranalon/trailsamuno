import { areTheSameRoutes } from "./route-comparators";

export function getThirdLevelMenu(tree: any, currentPage: string) {
    for (let page of tree.pages) {
      let result = getPageChildren(page, null, 3, currentPage);
  
      if (result !== null) {
        return result;
      }
    }
    return null;
  }
  
  function getPageChildren(page: any, parentPage: any, level: number, currentPage: string): any {
    let result = null;
  
    if (areTheSameRoutes(currentPage, page.path)) {
      if (level === 1) {
        return parentPage.children;
      }
      if (page.children) {
        return page.children;
      } else {
        return null;
      }
    } else {
      if (page.children) {
        for (let childPage of page.children) {
          result = getPageChildren(childPage, page, level - 1, currentPage);
  
          if (result !== null) {
            return result;
          }
        }
        return null;
      } else {
        return null;
      }
    }
  }
  