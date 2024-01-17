document.addEventListener("DOMContentLoaded", (e) => {

   setTimeout(() => {
      document.querySelector("#map-iframe").innerHTML = `
         <iframe
            class="contact__iframe" 
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240525.72782699377!2d-99.30673396005726!3d19.61812546185808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f10d355f8155%3A0x749b29753b752ab6!2sMacro%20Plaza%20Tec%C3%A1mac!5e0!3m2!1ses-419!2smx!4v1705515635446!5m2!1ses-419!2smx" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
         </iframe>
      `;
   }, 2000);  
});