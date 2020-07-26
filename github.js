class Github {
  constructor() {
    this.client_id = '9a335948c1b1cf12b558';
    this.client_secret = 'd4aeb7d12baa7f9988384ebee205bf7480d5271a';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
    return {
      profile,
      repos
    }
  }
}