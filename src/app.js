let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let suffix = ['.com', '.es', '.org', '.mx', '.ve', '.net'];
let domainNames = [];

function generateDomains() {
  domainNames = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let m = 0; m < adj.length; m++) {
      for (let t = 0; t < noun.length; t++) {
        for (let s = 0; s < suffix.length; s++) {
          let domain = pronoun[i] + adj[m] + noun[t] + suffix[s];
          domainNames.push(domain);
        }
      }
    }
  }
}

function renderDomains() {
  let html = '';
  domainNames.forEach((domain, idx) => {
    html += `<p>${idx + 1}. ${domain}</p>`;
  });
  html += `<p>Total: ${domainNames.length} dominios generados</p>`;
  document.getElementById('Domains').innerHTML = html;
  console.log(`Total de combinaciones generadas: ${domainNames.length}`);
}

function generateDomain() {
  generateDomains();
  renderDomains();
}
window.generateDomain = generateDomain;