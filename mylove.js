let Ids = ["6hFKP7kl22184msxWDhXLL", "3YdKJzcoMZMacISlpY4QoP", "4Qq8rERaPWkDuZsvSWR9LL", "4pjqWL23sQ2gGQIbyw8lXL", "4uqUz5FdFGVnQspnJbtJgT", "30lKTJnxHqfD1UeiAn0BLD", "0xcdw2bWgJ4lrt3qZJrZ1o", "6O6qYUHbLjT0kGHm5rfp95", "5kunnyRXn1uwU3h1H2MYpI", "7FXj7Qg3YorUxdrzvrcY25", "6ElsyPFdGK9zSkf7J2UBiO", "2puHJmjL4jvO19aEA7kzcb", "0ja80k9GL9aR5IZ79tQHVX"];


function getIds(){
    return "https://open.spotify.com/embed/track/" + Ids[(Math.floor(Math.random() * Ids.length))] + "?utm_source=generator";
}    

function createSpotifyIframe(containerId) {
  const iframe = document.createElement('iframe');

  iframe.style.borderRadius = '12px';
  iframe.src = getIds(); // Provide the full Spotify embed URL
  iframe.width = '100%';
  iframe.height = '352';
  iframe.frameBorder = '0';
  iframe.allowFullscreen = true;
  iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
  iframe.loading = 'lazy';

  const container = document.getElementById(containerId);
  if (container) {
    container.appendChild(iframe);
  } else {
    console.error(`Container with ID "${containerId}" not found.`);
  }
}


