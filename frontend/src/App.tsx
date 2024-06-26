//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import {
  WorldCricketMatchesList,
  WorldCricketMatchesCreate,
  WorldCricketMatchesEdit,
} from './resources/WorldCricketMatches';
import {
  CountryMatchesList,
  CountryMatchesCreate,
  CountryMatchesEdit,
} from './resources/CountryMatches';
import { TeamsList, TeamsCreate, TeamsEdit } from './resources/Teams';
import { UserList, UserCreate, UserEdit } from './resources/User';
import WorldCricketMatchesIcon from '@mui/icons-material/SportsCricket';
import CountryMatchesIcon from '@mui/icons-material/Flag';
import TeamsIcon from '@mui/icons-material/Group';
import UserIcon from '@mui/icons-material/Person';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/a987c7b80">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="WorldCricketMatches"
          options={{ label: 'World Cricket Matches' }}
          list={WorldCricketMatchesList}
          create={WorldCricketMatchesCreate}
          edit={WorldCricketMatchesEdit}
          recordRepresentation="matchDate"
          icon={WorldCricketMatchesIcon}
        />
        <Resource
          name="CountryMatches"
          options={{ label: 'Country Matches' }}
          list={CountryMatchesList}
          create={CountryMatchesCreate}
          edit={CountryMatchesEdit}
          recordRepresentation="allTeams"
          icon={CountryMatchesIcon}
        />
        <Resource
          name="Teams"
          options={{ label: 'Teams' }}
          list={TeamsList}
          create={TeamsCreate}
          edit={TeamsEdit}
          recordRepresentation="teamName"
          icon={TeamsIcon}
        />
        <Resource
          name="User"
          options={{ label: 'User' }}
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
          recordRepresentation="mobileNumber"
          icon={UserIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
