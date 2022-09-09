// If there is no license, return an empty string
// creates the badges for each license and checks for the one chosen to return the proper links
function renderLicenseBadge(license) {
  const apacheB = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  const ccB = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  const gpLv3B = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const iscB = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  const mitB = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
  if (license === "Apache"){
    return apacheB;
  } else if (license === "CC"){
    return ccB;
  } else if (license === "GPLv3"){
    return gpLv3B;
  } else if (license === "ISC"){
    return iscB;
  } else if (license === "MIT"){
    return mitB;
  } else {
    return "";
  }
};


// If there is no license, return an empty string
// creates the license link variables and allows those to be called 
function renderLicenseLink(license) {
  const apacheLink = 'http://www.apache.org/licenses/LICENSE-2.0';
  const ccLink = 'https://creativecommons.org/licenses/by/2.0/legalcode'
  const gV3Link = 'https://www.gnu.org/licenses/gpl-3.0.html';
  const iscLink = 'https://opensource.org/licenses/ISC';
  const mitLink = 'https://www.mit.edu/~amini/LICENSE.md';
  
  if (license === "Apache"){
    return apacheLink;
  }else if (license === "CC"){
    return ccLink;
  } else if (license === "GPLv3"){
    return gV3Link;
  } else if (license === "ISC"){
    return iscLink;
  } else if (license === "MIT"){
    return mitLink;
  } else {
    return "";
  }
}


// If there is no license, return an empty string
// license's get called here to input the links and badges to the readme
function renderLicenseSection(license) {
 if (license === "none"){
  return "";
 } else {
  return `## License
  This application is covered under the ${license} ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`;
 }
};


// this is the template for the readme and where all the inputs get called for it to be created 
function generateMarkdown(data) {
  return `# ${data.projectName}
  
  ${renderLicenseSection(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [More Info](#more-info)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Contact Info](#contact-info)
  
  
  ## Installation
  
  To install the programs you'll need you've got to run these commands.
  ~~~
  ${data.installation}
  
  ${data.dependencies}
  ~~~
  
  ## Usage
  
  To run the program you've got to use the command:
  ~~~
  ${data.usage}
  ~~~
  ---
  
  ## More Info
  
  ${data.moreInfo}
  
  ## How to Contribute
  
  To help contribute to this project, contact me over at ${data.contribution}!
  
  ## Tests
  
  To run tests
  ~~~
  ${data.runTests}
  ~~~
  
  ## Questions
  
  If you have any questions contact me at ${data.questions}
  
  ## Contact Info
  
  - You can find more of my work over here ${data.gitUser}
  
  - For anything else contact me at ${data.email}
  
`;
}

module.exports = generateMarkdown;
