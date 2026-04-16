const { readFileSync, writeFileSync } = require('node:fs');
const https = require('node:https');

function fetchURL() {
  return new Promise((resolve, reject) => {
    https
      .get('https://pget.vercel.app/', (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk.toString();
        });

        res.on('end', () => {
          const cleaned = data.trim();

          try {
            const parsed = JSON.parse(cleaned);
            if (parsed && typeof parsed === 'object') {
              resolve(parsed);
              return;
            }

            if (typeof parsed === 'string') {
              resolve(parsed.replace(/^"(.*)"$/, '$1'));
              return;
            }
          } catch {
            reject('Invalid JSON');
            return;
          }

          resolve(cleaned.replace(/^"(.*)"$/, '$1'));
        });
      })
      .on('error', reject);
  });
}

async function main() {
  try {
    const data = await fetchURL();

    let readme = readFileSync('README.md', 'utf-8');

    const profile =
      data && typeof data === 'object'
        ? data
        : {
            github: String(data || ''),
            email: '',
            portfolio: '',
            linkedin: '',
            twitter: '',
          };

    const githubUsername = String(profile.github || '')
      .replace('https://github.com/', '')
      .replace(/\/$/, '');

    const authorSection = `
## 👤 Author

<div align="center">
  <img src="https://github.com/${githubUsername}.png" alt="Developer" width="100" style="border-radius:50%"/>
  
  <h3>Kaushik Verma</h3>
  
  <p><em>Building AI tools that turn long documents into clear decisions.</em></p>

  [![Email](https://img.shields.io/badge/Email-${profile.email}%40gmail.com-EA4335?style=for-the-badge&logo=gmail)](mailto:${profile.email})
  [![Portfolio](https://img.shields.io/badge/Website-kaushikverma-000000?style=for-the-badge&logo=vercel)](${profile.portfolio})
  [![GitHub](https://img.shields.io/badge/GitHub-kaushik--2318-181717?style=for-the-badge&logo=github)](${profile.github})
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-kaushik--2318-0077B5?style=for-the-badge&logo=linkedin)](${profile.linkedin})
  [![Twitter](https://img.shields.io/badge/Twitter-kaushik--2318-1DA1F2?style=for-the-badge&logo=twitter)](${profile.twitter})

  <p>Open to product feedback, collaboration, and thoughtful conversation.</p>
</div>

<div align="center">
  <p>If you found this project helpful, please consider giving it a ⭐️</p>
  
  [![GitHub stars](https://img.shields.io/github/stars/${githubUsername}/Sommaire-AI-Powered-Document-Summarization-Platform?style=social)](https://github.com/${githubUsername}/Sommaire-AI-Powered-Document-Summarization-Platform)
</div>
`;

    readme = readme.replace(
      /<!-- AUTHOR_SECTION_START -->[\s\S]*<!-- AUTHOR_SECTION_END -->/,
      `<!-- AUTHOR_SECTION_START -->
${authorSection}
<!-- AUTHOR_SECTION_END -->`,
    );

    writeFileSync('README.md', readme);

    console.log('✅ Updated README');
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

main();
