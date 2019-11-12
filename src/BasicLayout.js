import React from 'react';
import DocumentTitle from 'react-document-title';
import defaultGetPageTitle from './getPageTitle';
import getMenuData from './utils/getMenuData';
const defaultPageTitleRender = (pageProps,props) => {
  const {pageTitleRender} = props;
  if(pageTitleRender === false){
    return props.title || '';
  }
  if(pageTitleRender){

  }
  return defaultGetPageTitle(pageProps);
}
class BasicLayout extends React.Component{
  render(){
    const {
      children,
      location,
      menu,
      menuDataRender,
      route={
        routes:[]
      }
    } = this.props;
    const {routes,path} = route;
    const formatMessage = ({ id, defaultMessage, ...rest }) => {
      if (this.props.formatMessage) {
        return this.props.formatMessage({
          id,
          defaultMessage,
          ...rest,
        });
      }
      const locales = getLocales();
      if (locales[id]) {
        return locales[id];
      }
      if (defaultMessage) {
        return defaultMessage;
      }
      return id;
    };
    const {menuData,breadcrumb} = getMenuData(routes,menu,formatMessage,menuDataRender);
    const defaultProps = {
      ...this.props,
      formatMessage,
      breadcrumb
    }
    const pageTitle = defaultPageTitleRender({
      pathname:location.pathname,
      ...defaultProps
    },this.props);
    return(
      <React.Fragment>
        <DocumentTitle title={pageTitle}>
          {children}
        </DocumentTitle>
      </React.Fragment>
    )
  }
}

export default BasicLayout;