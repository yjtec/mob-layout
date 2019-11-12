import pathToRegexp from 'path-to-regexp';
export const matchParamsPath = (pathname,breadcrumb) => {
  if(breadcrumb){
    const pathKey = Object.keys(breadcrumb).find(key => pathToRegexp(key).test(pathname));
    if(pathKey){
      return breadcrumb[pathKey];
    }
  }
  return {
    path:'',
  }
}
const getPageTitle = (props,ignoreTitle) => {
  const {
    pathname ="/",
    breadcrumb,
    formatMessage,
    title="全景智慧城市",
    menu ={locale:true,}
  } = props; 
  const pageTitle = ignoreTitle ? '' : title;
  if(!pathname){
    return pageTitle;
  }
  const currRouterData = matchParamsPath(pathname,breadcrumb);
  if(!currRouterData){
    return pageTitle;
  }
  let pageName = currRouterData.name;
  if(menu.locale && currRouterData.locale && formatMessage){
    pageName = formatMessage({
      id:currRouterData.locale || '',
      defaultMessage:currRouterData.name,
    })
  }
  if(!pageName){
    return pageTitle;
  }
  if(ignoreTitle){
    return pageName;
  }
  return `${pageName} - ${title}`;
}
export default getPageTitle;