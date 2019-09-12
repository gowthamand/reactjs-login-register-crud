import Helmet from "react-helmet";
import React from "react";

const TitleComponent = ({title}) => {
    var defaultTitle = '⚛️ app';
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export default TitleComponent;
