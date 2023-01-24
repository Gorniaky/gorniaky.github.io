const imgURLs = {
  github_readme_streak_stats: 'https://github-readme-streak-stats.herokuapp.com/?user=Gorniaky&theme=github-dark&hide_border=true&background=00000000',
  github_readme_stats: 'https://github-readme-stats.vercel.app/api?username=Gorniaky&show_icons=true&theme=github_dark&hide_border=true&bg_color=00000000',
  github_contribution_grid_snake: 'https://raw.githubusercontent.com/Gorniaky/Gorniaky/snake/github-contribution-grid-snake.svg',
  github_readme_stats_top_langs: 'https://github-readme-stats.vercel.app/api/top-langs/?username=Gorniaky&layout=compact&theme=github_dark&hide_border=true&bg_color=00000000',
  img_linkedin: 'https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white',
  img_gmail: 'https://img.shields.io/badge/hwss.s2-D14836?style=for-the-badge&logo=gmail&logoColor=white',
  img_paypal: 'https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white',
};

const docs = {
  grst: document.getElementById('img_grst'),
  grs: document.getElementById('img_grs'),
  gcgs: document.getElementById('img_gcgs'),
  gcstl: document.getElementById('img_gcgstl'),
  linkedin: document.getElementById('img_linkedin'),
  gmail: document.getElementById('img_gmail'),
  paypal: document.getElementById('img_paypal'),
}

docs.grst.src = imgURLs.github_readme_streak_stats;
docs.grs.src = imgURLs.github_readme_stats;
docs.gcgs.src = imgURLs.github_contribution_grid_snake;
docs.gcstl.src = imgURLs.github_readme_stats_top_langs;
docs.linkedin.src = imgURLs.img_linkedin;
docs.gmail.src = imgURLs.img_gmail;
docs.paypal.src = imgURLs.img_paypal;
