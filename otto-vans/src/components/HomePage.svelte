<script>
  let projects = [
    { name: "Van 1", image: "van1.jpg", link: "https://www.google.com" },
    { name: "Van 2", image: "van2.jpg", link: "https://www.google.com" },
    { name: "Van 3", image: "van3.jpg", link: "https://www.google.com" }
  ];
  let contact = {
    name: "John Smith",
    email: "john@example.com",
    phone: "555-555-5555"
  };
  export let currentComponent;
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'FirstProject'
		});
	}
  </script>
  <h1 id="splash">This is where a nice landing photo/slideshow will be</h1>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <h1 id="about-us">About us</h1>
  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed pulvinar proin gravida hendrerit lectus a. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Scelerisque fermentum dui faucibus in ornare quam viverra. Nunc non blandit massa enim nec. Ornare arcu odio ut sem nulla pharetra. Dolor sit amet consectetur adipiscing elit pellentesque. Vulputate sapien nec sagittis aliquam. Netus et malesuada fames ac turpis egestas maecenas. In mollis nunc sed id semper risus in hendrerit gravida. In vitae turpis massa sed elementum tempus egestas sed sed. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Consequat ac felis donec et odio pellentesque diam. Massa tincidunt nunc pulvinar sapien. Id consectetur purus ut faucibus pulvinar elementum integer. Nam at lectus urna duis convallis convallis tellus id interdum. Dignissim sodales ut eu sem integer vitae justo.</h3>
  <br>
  <br>
  <br>
  <br>
  <h1 id="past-projects">Past projects</h1>
  <ul>
    {#each projects as project}
      <li>
      <a href={project.link}>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name}>
      </a>
      </li>
    {/each}
  </ul>

    <h1 id="customer-reviews">About us</h1>
  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed pulvinar proin gravida hendrerit lectus a. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Scelerisque fermentum dui faucibus in ornare quam viverra. Nunc non blandit massa enim nec. Ornare arcu odio ut sem nulla pharetra. Dolor sit amet consectetur adipiscing elit pellentesque. Vulputate sapien nec sagittis aliquam. Netus et malesuada fames ac turpis egestas maecenas. In mollis nunc sed id semper risus in hendrerit gravida. In vitae turpis massa sed elementum tempus egestas sed sed. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Consequat ac felis donec et odio pellentesque diam. Massa tincidunt nunc pulvinar sapien. Id consectetur purus ut faucibus pulvinar elementum integer. Nam at lectus urna duis convallis convallis tellus id interdum. Dignissim sodales ut eu sem integer vitae justo.</h3>
  <br>
  <a>
  <button on:click={sayHello}>
      Switch Component
  </button>
  </a>
  <div id="contact-us">
    <h2>Contact Us</h2>
    <p>
      Name: {contact.name}<br>
      Email: {contact.email}<br>
      Phone: {contact.phone}
    </p>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  </div>