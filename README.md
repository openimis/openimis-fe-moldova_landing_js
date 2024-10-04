# openIMIS Frontend Moldova Landing module

This repository holds the files of the openIMIS Frontend Moldova Landing module.
It is dedicated to be bootstrap development of [openimis-fe_js](https://github.com/openimis/openimis-fe_js) modules, providing an empty (yet deployable) module.

Please refer to [openimis-fe_js](https://github.com/openimis/openimis-fe_js) to see how to build and and deploy (in developement or server mode).

The module is built with [rollup](https://rollupjs.org/).
In development mode, you can use `yarn link` and `yarn start` to continuously scan for changes and automatically update your development server.

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/openimis/openimis-fe-template_js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/openimis/openimis-fe-template_js/alerts/)

## Main Contribution

**core.PublicPage**: This module serves as the Public Page for the Moldova implementation (Landing Page). To enable its use, it must be exposed as a **core.PublicPage** contribution point. Additionally, the database configuration variable **App.enablePublicPage** must be set to `true`.
