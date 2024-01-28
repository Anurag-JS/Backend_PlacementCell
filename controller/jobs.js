const env = require('../config/environment');

module.exports.jobPage = async function (req, res) {
    // Use dynamic import() for ES module
    const { default: fetch } = await import('node-fetch');
    
    const response = await fetch(env.api_path);
    const jobsData = await response.json();
    
    return res.render('placementCell', {
        title: "Placement Cell",
        body: jobsData.jobs
    });
};
