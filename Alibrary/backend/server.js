const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { Octokit } = require('@octokit/rest');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend/build')));

// GitHub configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = 'afr117';
const GITHUB_REPO = 'Alibrary';
const FILE_PATH = 'backend/frontend/public/data/products.json';

// Initialize GitHub API
const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

// API endpoint to save products to GitHub
app.post('/api/github/commit', async (req, res) => {
  try {
    const products = req.body;
    
    if (!GITHUB_TOKEN) {
      return res.status(500).json({ 
        error: 'GitHub token not configured. Please set GITHUB_TOKEN environment variable.' 
      });
    }

    // Convert products to JSON string
    const content = JSON.stringify(products, null, 2);
    
    // Get the current file to get its SHA
    let currentFile;
    try {
      const response = await octokit.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: FILE_PATH
      });
      currentFile = response.data;
    } catch (error) {
      if (error.status !== 404) {
        throw error;
      }
    }

    // Create or update the file
    const commitMessage = `Update products via admin panel - ${new Date().toISOString()}`;
    
    const params = {
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: FILE_PATH,
      message: commitMessage,
      content: Buffer.from(content).toString('base64'),
      branch: 'main'
    };

    if (currentFile) {
      params.sha = currentFile.sha;
    }

    await octokit.repos.createOrUpdateFileContents(params);

    res.json({ 
      success: true, 
      message: 'Products saved to GitHub successfully!',
      commitMessage: commitMessage
    });

  } catch (error) {
    console.error('GitHub API Error:', error);
    res.status(500).json({ 
      error: 'Failed to save to GitHub',
      details: error.message 
    });
  }
});

// API endpoint to get current products
app.get('/api/products', async (req, res) => {
  try {
    const response = await octokit.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: FILE_PATH
    });
    
    const content = Buffer.from(response.data.content, 'base64').toString();
    const products = JSON.parse(content);
    
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ 
      error: 'Failed to fetch products',
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    githubConfigured: !!GITHUB_TOKEN,
    timestamp: new Date().toISOString()
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 GitHub integration: ${GITHUB_TOKEN ? '✅ Configured' : '❌ Not configured'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
}); 