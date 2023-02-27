<style>
  @import '../../../node_modules/bulma/css/bulma.css';
</style>
<script>
  import HomePage from '../components/HomePage.svelte';
  import FirstProject from '../components/FirstProject.svelte';
  let currentComponent = 'HomePage';
  function handleMessage(event) {
		currentComponent = event.detail.text;
	}
</script>
<nav id="splash" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#splash">
      <h1>OTTO Property Developments</h1>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a href="#about-us" class="navbar-item">
        About us
      </a>
      <a href="#past-projects" class="navbar-item">
        Past Projects
      </a>
      <a href="#customer-reviews" class="navbar-item">
        Customer reviews
      </a>

      <a href="#contact-us" class="navbar-item">
        Contact us
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="mailto:otto.propdev@gmail.com">
            <strong>otto.propdev@gmail.com</strong>
          </a>
          <a class="button is-light">
            0123456789
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<br>
<br>
<br>
<br>


<div>
  {#if currentComponent === 'HomePage'}
    <svelte:component  this={HomePage} currentComponent={currentComponent} on:message={handleMessage}  />
  {:else if currentComponent === 'FirstProject'}
    <svelte:component  this={FirstProject} />
    {currentComponent}
  {/if}
</div>