<script>
  let projectPhotos = [
    { name: "first project", image: "van1.jpg" }
    ];
    
</script>

<h1 id="project-one">First Project</h1>
    
  <ul>
    {#each projectPhotos as projectPhoto}
      <li>
      
      <a>
        <img src={projectPhoto.image} alt={projectPhoto.name}>
      </a>
      </li>
    {/each}
  </ul>