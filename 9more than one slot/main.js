Vue.component('modal', {
    template: `
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Modal title</p>
              <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
              <!-- Content ... -->
              <slot name="content"></slot>            
              
              </section>
            <footer class="modal-card-foot">
              <button class="button is-success"><slot name="confirm-button">Save changes</slot></button>
              <button class="button">Cancel</button>
            </footer>
          </div>
        </div>
    `,
})

new Vue({
    el: '#root',
 })
