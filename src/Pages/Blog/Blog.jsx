import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-red-600 text-center mt-10 ">
        FAQ
      </h1>
      <div className="h-full">
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 m-5">
          <div className="px-5 py-10 shadow">
            <h1 className="text-3xl font-semibold">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-200">
              I am using firebase for authentication purpose in my web
              application. Firebase provides secure authentication rather than
              my custom backend authentication which is vulnerable in many
              cases.
              <br />
              <br />I am using firebase firebase authentication via custom hook
              called react firebase hooks. The other authentication system
              are... <br /> 1) custom backend own setup <br />
              2) OAuth 2.0 <br /> 3) API token <br /> 4) Cookie-Based
              authentication <br /> 5) Token-Based authentication <br /> 6)
              OpenId, SAML
            </p>
          </div>
          <div className="px-5 py-10 shadow">
            <h1 className="text-3xl font-semibold">
              What other services does firebase provide other than
              authentication
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-200">
              The services provided by google firebase are except
              Authentication...
            </p>

            <p>1) Realtime Database</p>
            <p>2) Cloud Functions</p>
            <p>3) Remote Config</p>
            <p>4) Firebase ML</p>
            <p>5) Cloud Messaging</p>
            <p>6) Hosting</p>
            <p>7) Cloud Storage</p>

            <div className="flex justify-end mt-4"></div>
          </div>
        </div>
        <div className="grid grid-flow-row gap-4 md:gap-10 px-6">
          <table class="table-fixed w-full py-10 my-10 shadow">
            <thead>
              <tr className="text-2xl">
                <th>Authorization</th>
                <th>Authentication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  1) Authorization is used to checking for accessing the
                  resources.
                </td>
                <td>
                  1) In authentication process, the identity of users are
                  checked for providing the access to the system.
                </td>
              </tr>
              <tr>
                <td>
                  2) Authorization is needed for privilege or security levels.
                </td>
                <td>
                  2) Authentication is done before the authorization process.
                </td>
              </tr>
              <tr>
                <td>
                  3) Authorization checks the users or persons are validated.
                </td>
                <td>
                  3) Authentication process, users or persons are verified.
                </td>
              </tr>
              <tr>
                <td>
                  4) Authorization is the right that What permission do user
                  have?
                </td>
                <td>
                  4) Authentication determines whether the person is native user
                  or not.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blog;
